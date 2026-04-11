const { add, subtract, multiply, divide, factorial } = require("../src/mathUtils");

describe("mathUtils", () => {
  // ── add ──────────────────────────────────────────────────────────────────
  describe("add()", () => {
    it("adds two positive numbers", () => {
      expect(add(2, 3)).toBe(5);
    });

    it("adds a positive and a negative number", () => {
      expect(add(10, -4)).toBe(6);
    });

    it("returns 0 when both arguments are 0", () => {
      expect(add(0, 0)).toBe(0);
    });

    it("handles floating-point numbers", () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  // ── subtract ─────────────────────────────────────────────────────────────
  describe("subtract()", () => {
    it("subtracts b from a", () => {
      expect(subtract(10, 4)).toBe(6);
    });

    it("returns a negative when b > a", () => {
      expect(subtract(3, 7)).toBe(-4);
    });

    it("returns 0 when a equals b", () => {
      expect(subtract(5, 5)).toBe(0);
    });
  });

  // ── multiply ─────────────────────────────────────────────────────────────
  describe("multiply()", () => {
    it("multiplies two positive numbers", () => {
      expect(multiply(3, 4)).toBe(12);
    });

    it("multiplying by zero returns 0", () => {
      expect(multiply(99, 0)).toBe(0);
    });

    it("multiplying two negatives returns a positive", () => {
      expect(multiply(-3, -4)).toBe(12);
    });
  });

  // ── divide ───────────────────────────────────────────────────────────────
  describe("divide()", () => {
    it("divides a by b", () => {
      expect(divide(10, 2)).toBe(5);
    });

    it("returns a float for non-integer division", () => {
      expect(divide(7, 2)).toBe(3.5);
    });

    it("throws when dividing by zero", () => {
      expect(() => divide(5, 0)).toThrow("Division by zero is not allowed.");
    });
  });

  // ── factorial ─────────────────────────────────────────────────────────────
  describe("factorial()", () => {
    it("returns 1 for factorial(0)", () => {
      expect(factorial(0)).toBe(1);
    });

    it("returns 1 for factorial(1)", () => {
      expect(factorial(1)).toBe(1);
    });

    it("returns 120 for factorial(5)", () => {
      expect(factorial(5)).toBe(120);
    });

    it("throws for negative input", () => {
      expect(() => factorial(-1)).toThrow(
        "Factorial is not defined for negative numbers."
      );
    });
  });
});
