import generateUniqueNumber from "../src";

// just run the function, it will return unique number;
const uniqueNumber = generateUniqueNumber();
console.log(uniqueNumber);

// provide device id, if multiple devices. Max value of device id is 99. Otherwise, it will through error;
const anotherUniqueNumber = generateUniqueNumber({deviceId: 99})
console.log(anotherUniqueNumber)