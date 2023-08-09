import { IOptions } from "./interface";

const DEFAULT_INCREMENTED_VALUE = 1;

let prevTimeStamp = getTimeStamp();
let incrementedValue = 1;
let maxIncrementedValue = 9;

/**
 * Return unique number
 *
 * @param option - { deviceId - device number, max 99 }
 * @return number
 */
export default function (option?: IOptions) {
  const deviceId = option?.deviceId || getRandomNumber();
  if(deviceId < 10){
    maxIncrementedValue = 99;
  }
  let timestamp = getTimeStamp();
  let incrementedValue = getIncrementedValue(timestamp);
  while(incrementedValue > maxIncrementedValue){
    timestamp = getTimeStamp();
    incrementedValue = getIncrementedValue(timestamp);
  }
  return generateUniqueNumber(timestamp, deviceId, incrementedValue);
}

/** @internal */
export function generateUniqueNumber(
  timestamp: number,
  deviceId: number,
  incrementedValue: number
) {
 return Number(timestamp.toString() + ""+deviceId.toString()+""+incrementedValue.toString());
}

/** @internal */
export function getRandomNumber() {
  return Math.floor(Math.random() * 9);
}

/** @internal */
export function getIncrementedValue(timestamp: number) {
  if (prevTimeStamp === timestamp) {
    incrementedValue += 1;
  } else {
    incrementedValue = DEFAULT_INCREMENTED_VALUE;
    prevTimeStamp = timestamp;
  }
  return incrementedValue;
}

/** @internal */
export function getTimeStamp() {
  return new Date().getTime();
}
