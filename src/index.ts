import { IOptions } from "./interface";

const DEFAULT_INCREMENTED_VALUE = 1;

let prevTimeStamp = getTimeStamp();
let incrementedValue = 1;

export default function (option: IOptions) {
  const deviceId = option?.deviceId || 1;
  const timestamp = getTimeStamp();
  const incrementedValue = getIncrementedValue(timestamp);




}


export function getIncrementedValue(timestamp: number) {
  if (prevTimeStamp === timestamp) {
    incrementedValue += 1;
    
  }
  else {
    incrementedValue = DEFAULT_INCREMENTED_VALUE;
    prevTimeStamp = timestamp;
  }
  return incrementedValue;
}



export function getTimeStamp() {
  return new Date().getTime();
}


