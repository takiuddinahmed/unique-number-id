import generateUniqueNumber, {
  convertToDesiredBit,
  getIncrementedValue,
  getRandomNumber,
  getTimeStamp,
} from "../src";

const MAX_43_BIT = 0b011111111111111111111111111111111111111111111; // 41 ones in binary
const MAX_10_BIT = 0b1111111111;

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

  describe("Random number", () => {
    it("Number should be between 0 and 1023", () => {
      for (let i = 0; i < 10000; i++) {
        const number = getRandomNumber();
        expect(number).toBeLessThanOrEqual(1023);
        expect(number).toBeGreaterThanOrEqual(0);
      }
    });
  });

  describe("binary conversion test", () => {
    it("Test timestamp", () => {
      const timestamp = 1691400287731;
      const timestamp_43_bit = convertToDesiredBit(timestamp, MAX_43_BIT);
      console.log({
        timestamp: decToBin(timestamp << 20),
        timestamp_43_bit: decToBin(timestamp_43_bit),
      });
      console.log(timestamp_43_bit);
      expect(timestamp_43_bit).toBeDefined();
    });
  });

  // describe("Unique number", () => {
  //   it("should return unique number every time", () => {
  //     const obj: Record<number, boolean> = {};
  //     for (let i = 0; i < 10000000000; i++) {
  //       const number = generateUniqueNumber();
  //       console.log((number >>> 0).toString(2));
  //       expect(obj[number]).toBeFalsy();
  //       obj[number] = true;
  //     }
  //   });
  // });
});

function decToBin(number) {
  return (number >>> 0).toString(2);
}
