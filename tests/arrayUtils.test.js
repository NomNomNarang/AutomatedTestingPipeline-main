const {
  sum,
  average,
  unique,
  flattenOne,
  groupBy,
} = require("../src/arrayUtils");

describe("arrayUtils", () => {
  // ── sum ───────────────────────────────────────────────────────────────────
  describe("sum()", () => {
    it("sums a list of positive integers", () => {
      expect(sum([1, 2, 3, 4, 5])).toBe(15);
    });

    it("returns 0 for an empty array", () => {
      expect(sum([])).toBe(0);
    });

    it("handles negative numbers", () => {
      expect(sum([-1, -2, 3])).toBe(0);
    });

    it("throws for non-array input", () => {
      expect(() => sum("not an array")).toThrow(TypeError);
    });
  });

  // ── average ───────────────────────────────────────────────────────────────
  describe("average()", () => {
    it("computes the mean of an array", () => {
      expect(average([1, 2, 3, 4, 5])).toBe(3);
    });

    it("returns the only value for a single-element array", () => {
      expect(average([42])).toBe(42);
    });

    it("throws for an empty array", () => {
      expect(() => average([])).toThrow(
        "Cannot compute average of an empty array."
      );
    });

    it("throws for non-array input", () => {
      expect(() => average(null)).toThrow(TypeError);
    });
  });

  // ── unique ────────────────────────────────────────────────────────────────
  describe("unique()", () => {
    it("removes duplicate numbers", () => {
      expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
    });

    it("removes duplicate strings", () => {
      expect(unique(["a", "b", "a"])).toEqual(["a", "b"]);
    });

    it("returns an empty array unchanged", () => {
      expect(unique([])).toEqual([]);
    });

    it("throws for non-array input", () => {
      expect(() => unique(123)).toThrow(TypeError);
    });
  });

  // ── flattenOne ────────────────────────────────────────────────────────────
  describe("flattenOne()", () => {
    it("flattens one level of nesting", () => {
      expect(flattenOne([1, [2, 3], [4]])).toEqual([1, 2, 3, 4]);
    });

    it("does not flatten deeper than one level", () => {
      expect(flattenOne([1, [2, [3]]])).toEqual([1, 2, [3]]);
    });

    it("returns an empty array unchanged", () => {
      expect(flattenOne([])).toEqual([]);
    });

    it("throws for non-array input", () => {
      expect(() => flattenOne("oops")).toThrow(TypeError);
    });
  });

  // ── groupBy ───────────────────────────────────────────────────────────────
  describe("groupBy()", () => {
    it("groups numbers by parity", () => {
      const result = groupBy([1, 2, 3, 4, 5], (n) =>
        n % 2 === 0 ? "even" : "odd"
      );
      expect(result).toEqual({ odd: [1, 3, 5], even: [2, 4] });
    });

    it("groups strings by first letter", () => {
      const result = groupBy(["apple", "avocado", "banana"], (s) => s[0]);
      expect(result).toEqual({ a: ["apple", "avocado"], b: ["banana"] });
    });

    it("returns an empty object for an empty array", () => {
      expect(groupBy([], (x) => x)).toEqual({});
    });

    it("throws when keyFn is not a function", () => {
      expect(() => groupBy([1, 2], "not-a-fn")).toThrow(TypeError);
    });
  });
});
