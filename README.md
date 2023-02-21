# A library of type checking utilities.

## Description

This is a library of utilities for checking the types of input values of variables.

Each utility returns a value of the "boolean" type: "true" or "false".

The checks are based on the "isNotExists()" function, which returns "true" if it received one of three values as input, namely "undefined", "null" or "NaN". In this case, it is assumed that the input received "nothing" or something that does not exist. When any other value is received as input, it is assumed that something existing has been received. To invert its result, the "isExists()" function is used, which returns "true" when receiving a value that is considered to exist.

In all other functions, the "isExists()" function is applied first, and only after that the operation of checking the type of this input value is performed.

## Installation

`$ npm install lukinto-utils-type-checking`

## Usage

```js
const {
  isString,
  isStringEmpty,
  isStringNotEmpty,
} = require('lukinto-utils-type-checking')

const input = ''

if (isString(input)) { // => true
  // your code
}
if (isStringEmpty(input)) { // => true
  // your code
}
if (isStringNotEmpty(input)) { // => false
  // your code
}
```

## API

### isNotExists(input) ⇒ boolean
- When the input value is "undefined", "null" or "NaN" returns "true".
- Returns "false" in all other cases!

### isExists(input) ⇒ boolean
- When the input value is "undefined", "null" or "NaN" returns "false".
- Returns "true" in all other cases!

### isBoolean(input) ⇒ boolean
- When the input value is of type "boolean", returns "true".
- Returns "false" in all other cases!

### isBooleanObject(input) ⇒ boolean
- When the input value is the "Boolean" object, returns "true".
- Returns "false" in all other cases!

### isBooleanAny(input) ⇒ boolean
- When the input value of type "boolean" or is the "Boolean" object, returns "true".
- Returns "false" in all other cases!

### isNumber(input) ⇒ boolean
- When the input value is of type "number", returns "true".
- Returns "false" in all other cases!

### isNumberZero(input) ⇒ boolean
- When the input value is of type "number" and is equal to 0, returns "true".
- Returns "false" in all other cases!

### isNumberNotZero(input) ⇒ boolean
- When the input value is of type "number" and is not equal to 0, returns "true".
- Returns "false" in all other cases!

### isNumberObject(input) ⇒ boolean
- When the input value is the "Number" object, returns "true".
- Returns "false" in all other cases!

### isNumberAny(input) ⇒ boolean
- When the input value of type "number" or is the "Number" object, returns "true".
- Returns "false" in all other cases!

### isBigInt(input) ⇒ boolean
- When the input value of type "bigint", returns "true".
- Returns "false" in all other cases!

### isString(input) ⇒ boolean
- When the input value is of type "string", returns "true".
- Returns "false" in all other cases!

### isStringEmpty(input) ⇒ boolean
- When the input value is of type "string" and is equal to '' (empty string), returns "true".
- Returns "false" in all other cases!

### isStringNotEmpty(input) ⇒ boolean
- When the input value is of type "string" and is not equal to '' (empty string), returns "true".
- Returns "false" in all other cases!

### isStringObject(input) ⇒ boolean
- When the input value is the "String" object, returns "true".
- Returns "false" in all other cases!

### isStringAny(input) ⇒ boolean
- When the input value of type "string" or is the "String" object, returns "true".
- Returns "false" in all other cases!

### isRegExp(input) ⇒ boolean
- When the input value is the "RegExp" object, returns "true".
- Returns "false" in all other cases!

### isArray(input) ⇒ boolean
- When the input value is the "Array" object, returns "true".
- Returns "false" in all other cases!

### isArrayEmpty(input) ⇒ boolean
- When the input value is the "Array" object and its length is 0, returns "true".
- Returns "false" in all other cases!

### isArrayNotEmpty(input) ⇒ boolean
- When the input value is the "Array" object and its length is greater than 0, returns "true".
- Returns "false" in all other cases!

### isSet(input) ⇒ boolean
- When the input value is the "Set" object, returns "true".
- Returns "false" in all other cases!

### isSetEmpty(input) ⇒ boolean
- When the input value is the "Set" object and its size is 0, returns "true".
- Returns "false" in all other cases!

### isSetNotEmpty(input) ⇒ boolean
- When the input value is the "Set" object and its size is greater than 0, returns "true".
- Returns "false" in all other cases!

### isMap(input) ⇒ boolean
- When the input value is the "Map" object, returns "true".
- Returns "false" in all other cases!

### isMapEmpty(input) ⇒ boolean
- When the input value is the "Map" object and its size is 0, returns "true".
- Returns "false" in all other cases!

### isMapNotEmpty(input) ⇒ boolean
- When the input value is the "Map" object and its size is greater than 0, returns "true".
- Returns "false" in all other cases!

### isDate(input) ⇒ boolean
- When the input value is the "Date" object, returns "true".
- Returns "false" in all other cases!

### isPromise(input) ⇒ boolean
- When the input value is the "Promise" object, returns "true".
- Returns "false" in all other cases!

### isObjectAny(input) ⇒ boolean
- When the input value is of type "object", returns "true".
- Returns "false" in all other cases!

### isObject(input) ⇒ boolean
- When the input value is of type "object" and is not one of the objects from the following list: "Boolean", "Number", "String", "RegExp", "Array", "Set", "Map", "Date" or "Promise", returns "true".
- Returns "false" in all other cases!

### isObjectEmpty(input) ⇒ boolean
- When the input value is of type "object", satisfies the conditions for checking the function "isObject()", and is also empty, returns "true".
- Returns "false" in all other cases!

### isObjectNotEmpty(input) ⇒ boolean
- When the input value is of type "object", satisfies the conditions for checking the function "isObject()", and is also not empty, returns "true".
- Returns "false" in all other cases!

### isSymbol(input) ⇒ boolean
- When the input value is of type "symbol", returns "true".
- Returns "false" in all other cases!
