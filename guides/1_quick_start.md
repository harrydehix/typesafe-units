# Steps

Follow these steps to get started with the _typesafe-units_ package:

1. [Install the _typesafe-units_ package](#1-install-the-typesafe-units-package)
2. [Import the library](#2-import-the-library)
3. [Perform your first unit conversion](#3-perform-your-first-unit-conversion)

## 1. Install the _typesafe-units_ package

Run the following command to ensure you have the _typesafe-units_ package installed:

```sh
npm install typesafe-units
```

## 2. Import the library

To use this library in your code you have to import it.
Note that the import-syntax differs depending on your selected module system.

Either write:

```typescript
const units = require("typesafe-units").default;
```

or:

```typescript
import units from "typesafe-units";
```

## 3. Perform your first unit conversion

To convert the value `10` from the unit meter to centimeter write the following:

```typescript
const result = units.from(10, "m").to("cm");
console.log(result);
```
