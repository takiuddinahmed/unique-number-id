import {uniqueNumberId} from "../src";

// just run the function, it will return unique number;
const uniqueNumber = uniqueNumberId();
console.log(uniqueNumber);

// provide device id, if multiple devices. Max value of device id is 99. Otherwise, it will through error;
const anotherUniqueNumber = uniqueNumberId({deviceId: 99})
console.log(anotherUniqueNumber)