import { IOptions } from "./interface";

const DEFAULT_INCREMENTED_VALUE = 1;

let prevTimeStamp = getTimeStamp();
let incrementedValue = 1;
let maxIncrementedValue = 9;

/**
 * Return unique number
 *
 * @param option - { deviceId - device number, min - 0, max - 99 }
 * @return number
 */
export function uniqueNumberId  (option?: IOptions) {
  const deviceId = option?.deviceId || getRandomNumber();
  if(deviceId > 99){
    throw new Error("Device id limit exceeded. Max acceptable value of device id is 99. ")
  }
  if(deviceId <0){
    throw new Error("Device id should not be negative.")
  }
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

 function generateUniqueNumber(
  timestamp: number,
  deviceId: number,
  incrementedValue: number
) {
 return Number(timestamp.toString() + ""+deviceId.toString()+""+incrementedValue.toString());
}
 function getRandomNumber() {
  return Math.floor(Math.random() * 9);
}

 function getIncrementedValue(timestamp: number) {
  if (prevTimeStamp === timestamp) {
    incrementedValue += 1;
  } else {
    incrementedValue = DEFAULT_INCREMENTED_VALUE;
    prevTimeStamp = timestamp;
  }
  return incrementedValue;
}

 function getTimeStamp() {
  return new Date().getTime();
}
