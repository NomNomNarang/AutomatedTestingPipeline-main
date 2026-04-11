const {
  titleCase,
  reverseString,
  isPalindrome,
  truncate,
  countOccurrences,
} = require("../src/stringUtils");

describe("stringUtils", () => {
  // ── titleCase ────────────────────────────────────────────────────────────
  describe("titleCase()", () => {
    it("capitalises each word", () => {
      expect(titleCase("hello world")).toBe("Hello World");
    });

    it("handles an already-cased string", () => {
      expect(titleCase("THE QUICK BROWN FOX")).toBe("The Quick Brown Fox");
    });

    it("handles a single word", () => {
      expect(titleCase("node")).toBe("Node");
    });

    it("throws for non-string input", () => {
      expect(() => titleCase(42)).toThrow(TypeError);
    });
  });

  // ── reverseString ────────────────────────────────────────────────────────
  describe("reverseString()", () => {
    it("reverses a normal string", () => {
      expect(reverseString("hello")).toBe("olleh");
    });

    it("returns an empty string unchanged", () => {
      expect(reverseString("")).toBe("");
    });

    it("handles single characters", () => {
      expect(reverseString("a")).toBe("a");
    });

    it("throws for non-string input", () => {
      expect(() => reverseString(123)).toThrow(TypeError);
    });
  });

  // ── isPalindrome ─────────────────────────────────────────────────────────
  describe("isPalindrome()", () => {
    it("detects a simple palindrome", () => {
      expect(isPalindrome("racecar")).toBe(true);
    });

    it("is case-insensitive", () => {
      expect(isPalindrome("RaceCar")).toBe(true);
    });

    it("ignores spaces", () => {
      expect(isPalindrome("a man a plan a canal panama")).toBe(true);
    });

    it("returns false for non-palindromes", () => {
      expect(isPalindrome("hello")).toBe(false);
    });
  });

  // ── truncate ─────────────────────────────────────────────────────────────
  describe("truncate()", () => {
    it("truncates a long string and appends ...", () => {
      expect(truncate("Hello, World!", 5)).toBe("Hello...");
    });

    it("does not truncate if string fits within maxLength", () => {
      expect(truncate("Hi", 10)).toBe("Hi");
    });

    it("handles maxLength equal to string length", () => {
      expect(truncate("Hello", 5)).toBe("Hello");
    });

    it("throws for negative maxLength", () => {
      expect(() => truncate("test", -1)).toThrow(RangeError);
    });
  });

  // ── countOccurrences ─────────────────────────────────────────────────────
  describe("countOccurrences()", () => {
    it("counts overlapping occurrences correctly", () => {
      expect(countOccurrences("hello world hello", "hello")).toBe(2);
    });

    it("returns 0 when substring not found", () => {
      expect(countOccurrences("foobar", "baz")).toBe(0);
    });

    it("returns 0 for an empty substring", () => {
      expect(countOccurrences("abc", "")).toBe(0);
    });

    it("is case-sensitive", () => {
      expect(countOccurrences("Hello hello", "hello")).toBe(1);
    });
  });
});
