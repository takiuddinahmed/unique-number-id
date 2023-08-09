import generateUniqueNumber, {
  getIncrementedValue,
  getRandomNumber,
  getTimeStamp,
  generateUniqueNumber as gen
} from "../src";
import 'node:fs'
import * as fs from "fs";

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

      for (let i = 1; i < 9; i++) {
        expect(getIncrementedValue(timestamp)).toBe(i);
      }

      expect(getIncrementedValue(timestamp + 1)).toBe(1);
    });
  });

  describe("Random number", () => {
    it("Number should be between 0 and 1023", () => {
      for (let i = 0; i < 1000; i++) {
        const number = getRandomNumber();
        expect(number).toBeLessThanOrEqual(9);
        expect(number).toBeGreaterThanOrEqual(0);
      }
    });
  });

  describe("Unique id generation test",()=>{
    it("should match number",()=>{
      const timestamp = 2540570400000; // July 5, 2050
      const deviceId = 3;
      const incrementalValue = 45;
      const uniqueNumber = gen(timestamp,deviceId,incrementalValue);
      const uniqueNumber2 = gen(timestamp,incrementalValue,deviceId);
      expect(uniqueNumber).toBe(2540570400000345);
      expect(uniqueNumber2).toBe(2540570400000453);
    })
  })

  describe("Unique number test",()=>{

    it("Should return unique number",()=>{
        const storage : Record<number, boolean>={};
        for(let i =0; i< 1000;i++){
          const num = generateUniqueNumber({deviceId: 0});
          expect(storage[num]).toBeFalsy();
          storage[num] = true;
        }

        fs.writeFileSync(__dirname+"/"+"numlist.log", JSON.stringify(storage))

    })
  })

});

