# Unique Number ID
A scalable npm package that generates unique numbers. It ensures that the generated numbers are unique across different devices in a distributed system. The user can provide a device ID to generate a unique number based on that device ID.

## Installation
```bash
npm install unique-number-id
```
or 
```bash
yarn add unique-number-id
```

## Usage
Import generate function from the package:

```typescript
import { uniqueNumberId } from 'unique-number-id'
// or
const  { uniqueNumberId }  = require('unique-number-id');
```

### Generating a Unique Number
To generate a unique number, simply call the function:

```typescript
const uniqueNumber = uniqueNumberId();
console.log('Generated Unique Number:', uniqueNumber);
```

### Generating a Unique Number with Device ID
f you want to generate a unique number based on a specific device ID, provide the deviceId parameter:

```typescript
const uniqueNumber = uniqueNumberId({ deviceId: 3 });
console.log('Generated Unique Number for Device 3:', uniqueNumber);
```

Please ensure that the deviceId is a non-negative integer and is less than or equal to 99.

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/takiuddinahmed/unique-number-id/blob/main/LICENSE) file for details.