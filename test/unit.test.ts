import {uniqueNumberId} from "../src";
import 'node:fs'
import * as fs from "fs";

describe("Unit test", () => {


  describe("Unique number test",()=>{

    it("Should return unique number",()=>{
        const storage : Record<number, boolean>={};
        for(let i =0; i< 1000;i++){
          const num = uniqueNumberId();
          expect(storage[num]).toBeFalsy();
          storage[num] = true;
        }
    })

    it('should not work for device id larger than 99', function () {
      expect(()=>uniqueNumberId({deviceId: 100})).toThrowError();
    });
    it('should not work for negative device id', function () {
      expect(()=>uniqueNumberId({deviceId: -1})).toThrowError();
    });

  })

});

