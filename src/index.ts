import { IOptions } from "./interface";

const DEFAULT_INCREMENTED_VALUE = 1;

let prevTimeStamp = getTimeStamp();
let incrementedValue = 1;
const MAX_43_BIT = 0b11111111111111111111111111111111111111111111; // 41 ones in binary
const MAX_10_BIT = 0b1111111111;

export default function (option?: IOptions) {
  const deviceId = option?.deviceId || getRandomNumber();
  const timestamp = getTimeStamp();
  let incrementedValue = getIncrementedValue(timestamp);
  return generateUniqueNumber(timestamp, deviceId, incrementedValue);
}

export function generateUniqueNumber(
  timestamp: number,
  deviceId: number,
  incrementedValue: number
) {
  const timestamp_43_bit = convertToDesiredBit(timestamp, MAX_43_BIT);
  const deviceId_10_bit = convertToDesiredBit(deviceId, MAX_10_BIT);
  const incrementedValue_10_bit = convertToDesiredBit(
    incrementedValue,
    MAX_10_BIT
  );

  return (
    0 << 63
    // (timestamp_43_bit << 19) | (deviceId_10_bit << 10) | incrementedValue_10_bit
  );
}

/** @internal */
export function convertToDesiredBit(num: number, MAX_BIT: number) {
  // convert to 64 bit
  //
  const num_big_int = BigInt(num);
  const num_64 = BigInt.asUintN(64, num_big_int);
  const MAX_BIT_Big_int = BigInt(MAX_BIT);
  return num_64 & MAX_BIT_Big_int;
}

/** @internal */
export function getRandomNumber() {
  return Math.floor(Math.random() * 1024);
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
