const {uniqueNumberId} = require('../dist');

// just run the function, it will return unique number;
console.log(uniqueNumberId());

// provide device id, if multiple devices. Max value of device id is 99. Otherwise, it will through error;
console.log(uniqueNumberId({deviceId: 45}))
