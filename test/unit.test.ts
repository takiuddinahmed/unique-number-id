import { getIncrementedValue, getTimeStamp } from "../src";
describe("Unit test", () => {
  describe("timestamp test", () => {
    it("should return timestamp", () => {
      const time = getTimeStamp();
      expect(time).toBeDefined();
    });
  });

  describe("Increment value test", () => {
    it("should return valid incremental value", () => {
      const timestamp = getTimeStamp();

      for (let i = 1; i < 4096; i++) {
        expect(getIncrementedValue(timestamp)).toBe(i);
      }

      expect(getIncrementedValue(timestamp + 1)).toBe(1);
    });
  });
});
