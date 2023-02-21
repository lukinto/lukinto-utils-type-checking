// @ts-check
module.exports = {
  isNotExists,
  isExists,
  // booleans
  isBoolean,
  isBooleanObject,
  isBooleanAny,
  // numbers
  isNumber,
  isNumberZero,
  isNumberNotZero,
  isNumberObject,
  isNumberAny,
  // bigint
  isBigInt,
  // strings
  isString,
  isStringEmpty,
  isStringNotEmpty,
  isStringObject,
  isStringAny,
  // RegExp
  isRegExp,
  // arrays
  isArray,
  isArrayEmpty,
  isArrayNotEmpty,
  // Set object
  isSet,
  isSetEmpty,
  isSetNotEmpty,
  // Map object
  isMap,
  isMapEmpty,
  isMapNotEmpty,
  // Date object
  isDate,
  // Promise object
  isPromise,
  // objects
  isObjectAny,
  isObject,
  isObjectEmpty,
  isObjectNotEmpty,
  // symbol
  isSymbol,
}

/**
 * isNotExists & isExists
 */

/**
 * When the input value is "undefined", "null" or "NaN" returns "true".
 * Returns "false" in all other cases!
 * @since 1.0.0
 * @param {*} input - Any type of data.
 * @returns {boolean} Check result.
 */

function isNotExists(input) {
  return (
    (
      input === undefined ||
      input === null ||
      (typeof input === 'number' && isNaN(input))
    )
      ? true
      : false
  )
}

/**
 * When the input value is "undefined", "null" or "NaN" returns "false".
 * Returns "true" in all other cases!
 * @since 1.0.0
 * @param {*} input - Any type of data.
 * @returns {boolean} Check result.
 */

function isExists(input) {
  return !isNotExists(input)
}

/**
 * isBoolean & isBooleanObject & isBooleanAny
 */

// boolean primitive only

/**
 * When the input value is of type "boolean", returns "true".
 * Returns "false" in all other cases!
 * @since 1.0.0
 * @param {*} input - Any type of data.
 * @returns {boolean} Check result.
 */

function isBoolean(input) {
  return ((isExists(input) && typeof input === 'boolean') ? true : false)
}

// the Boolean object only

/**
 * When the input value is the "Boolean" object, returns "true".
 * Returns "false" in all other cases!
 * @since 1.0.0
 * @param {*} input - Any type of data.
 * @returns {boolean} Check result.
 */

function isBooleanObject(input) {
  return ((isObjectAny(input) && input instanceof Boolean) ? true : false)
}

// isBooleanAny === boolean primitive || the Boolean object

/**
 * When the input value of type "boolean" or is the "Boolean" object, returns "true".
 * Returns "false" in all other cases!
 * @since 1.0.0
 * @param {*} input - Any type of data.
 * @returns {boolean} Check result.
 */

function isBooleanAny(input) {
  return ((isBoolean(input) || isBooleanObject(input)) ? true : false)
}

/**
 * isNumber & isNumberZero & isNumberNotZero & isNumberObject & isNumberAny
 */

// number primitive only

/**
 * When the input value is of type "number", returns "true".
 * Returns "false" in all other cases!
 * @since 1.0.0
 * @param {*} input - Any type of data.
 * @returns {boolean} Check result.
 */

function isNumber(input) {
  return ((isExists(input) && typeof input === 'number') ? true : false)
}

/**
 * When the input value is of type "number" and is equal to 0, returns "true".
 * Returns "false" in all other cases!
 * @since 1.0.0
 * @param {*} input - Any type of data.
 * @returns {boolean} Check result.
 */

function isNumberZero(input) {
  return ((isExists(input) && input === 0) ? true : false)
}

/**
 * When the input value is of type "number" and is not equal to 0, returns "true".
 * Returns "false" in all other cases!
 * @since 1.0.0
 * @param {*} input - Any type of data.
 * @returns {boolean} Check result.
 */

function isNumberNotZero(input) {
  return ((isNumber(input) && input !== 0) ? true : false)
}

// the Number object only

/**
 * When the input value is the "Number" object, returns "true".
 * Returns "false" in all other cases!
 * @since 1.0.0
 * @param {*} input - Any type of data.
 * @returns {boolean} Check result.
 */

function isNumberObject(input) {
  return ((isExists(input) && input instanceof Number) ? true : false)
}

// isNumberAny === number primitive || the Number object

/**
 * When the input value of type "number" or is the "Number" object, returns "true".
 * Returns "false" in all other cases!
 * @since 1.0.0
 * @param {*} input - Any type of data.
 * @returns {boolean} Check result.
 */

function isNumberAny(input) {
  return ((isNumber(input) || isNumberObject(input)) ? true : false)
}

/**
 * isBigInt
 */

/**
 * When the input value of type "bigint", returns "true".
 * Returns "false" in all other cases!
 * @since 1.0.0
 * @param {*} input - Any type of data.
 * @returns {boolean} Check result.
 */

 function isBigInt(input) {
  return ((isExists(input) && typeof input === 'bigint') ? true : false)
}

/**
 * isString & isStringEmpty & isStringNotEmpty & isStringObject & isStringAny
 */

// string primitive only

/**
 * When the input value is of type "string", returns "true".
 * Returns "false" in all other cases!
 * @since 1.0.0
 * @param {*} input - Any type of data.
 * @returns {boolean} Check result.
 */

function isString(input) {
  return ((isExists(input) && typeof input === 'string') ? true : false)
}

/**
 * When the input value is of type "string" and is equal to '' (empty string), returns "true".
 * Returns "false" in all other cases!
 * @since 1.0.0
 * @param {*} input - Any type of data.
 * @returns {boolean} Check result.
 */

function isStringEmpty(input) {
  return ((isExists(input) && input === '') ? true : false)
}

/**
 * When the input value is of type "string" and is not equal to '' (empty string), returns "true".
 * Returns "false" in all other cases!
 * @since 1.0.0
 * @param {*} input - Any type of data.
 * @returns {boolean} Check result.
 */

function isStringNotEmpty(input) {
  return ((isString(input) && input !== '') ? true : false)
}

// the String object only

/**
 * When the input value is the "String" object, returns "true".
 * Returns "false" in all other cases!
 * @since 1.0.0
 * @param {*} input - Any type of data.
 * @returns {boolean} Check result.
 */

function isStringObject(input) {
  return ((isExists(input) && input instanceof String) ? true : false)
}

// isStringAny === string primitive || the String object

/**
 * When the input value of type "string" or is the "String" object, returns "true".
 * Returns "false" in all other cases!
 * @since 1.0.0
 * @param {*} input - Any type of data.
 * @returns {boolean} Check result.
 */

function isStringAny(input) {
  return ((isString(input) || isStringObject(input)) ? true : false)
}

/**
 * isRegExp
 */

/**
 * When the input value is the "RegExp" object, returns "true".
 * Returns "false" in all other cases!
 * @since 1.0.0
 * @param {*} input - Any type of data.
 * @returns {boolean} Check result.
 */

function isRegExp(input) {
  return ((isObjectAny(input) && input instanceof RegExp) ? true : false)
}

/**
 * isArray & isArrayEmpty & isArrayNotEmpty
 */

/**
 * When the input value is the "Array" object, returns "true".
 * Returns "false" in all other cases!
 * @since 1.0.0
 * @param {*} input - Any type of data.
 * @returns {boolean} Check result.
 */

function isArray(input) {
  return ((isObjectAny(input) && input instanceof Array) ? true : false)
}

/**
 * When the input value is the "Array" object and its length is 0, returns "true".
 * Returns "false" in all other cases!
 * @since 1.0.0
 * @param {*} input - Any type of data.
 * @returns {boolean} Check result.
 */

function isArrayEmpty(input) {
  return ((isArray(input) && input.length === 0) ? true : false)
}

/**
 * When the input value is the "Array" object and its length is greater than 0, returns "true".
 * Returns "false" in all other cases!
 * @since 1.0.0
 * @param {*} input - Any type of data.
 * @returns {boolean} Check result.
 */

function isArrayNotEmpty(input) {
  return ((isArray(input) && input.length > 0) ? true : false)
}

/**
 * isSet & isSetEmpty & isSetNotEmpty
 */

/**
 * When the input value is the "Set" object, returns "true".
 * Returns "false" in all other cases!
 * @since 1.0.0
 * @param {*} input - Any type of data.
 * @returns {boolean} Check result.
 */

function isSet(input) {
  return ((isObjectAny(input) && input instanceof Set) ? true : false)
}

/**
 * When the input value is the "Set" object and its size is 0, returns "true".
 * Returns "false" in all other cases!
 * @since 1.0.0
 * @param {*} input - Any type of data.
 * @returns {boolean} Check result.
 */

function isSetEmpty(input) {
  return ((isSet(input) && input.size === 0) ? true : false)
}

/**
 * When the input value is the "Set" object and its size is greater than 0, returns "true".
 * Returns "false" in all other cases!
 * @since 1.0.0
 * @param {*} input - Any type of data.
 * @returns {boolean} Check result.
 */

function isSetNotEmpty(input) {
  return ((isSet(input) && input.size > 0) ? true : false)
}

/**
 * isMap & isMapEmpty & isMapNotEmpty
 */

/**
 * When the input value is the "Map" object, returns "true".
 * Returns "false" in all other cases!
 * @since 1.0.0
 * @param {*} input - Any type of data.
 * @returns {boolean} Check result.
 */

function isMap(input) {
  return ((isObjectAny(input) && input instanceof Map) ? true : false)
}

/**
 * When the input value is the "Map" object and its size is 0, returns "true".
 * Returns "false" in all other cases!
 * @since 1.0.0
 * @param {*} input - Any type of data.
 * @returns {boolean} Check result.
 */

function isMapEmpty(input) {
  return ((isMap(input) && input.size === 0) ? true : false)
}

/**
 * When the input value is the "Map" object and its size is greater than 0, returns "true".
 * Returns "false" in all other cases!
 * @since 1.0.0
 * @param {*} input - Any type of data.
 * @returns {boolean} Check result.
 */

function isMapNotEmpty(input) {
  return ((isMap(input) && input.size > 0) ? true : false)
}

/**
 * isDate
 */

/**
 * When the input value is the "Date" object, returns "true".
 * Returns "false" in all other cases!
 * @since 1.0.0
 * @param {*} input - Any type of data.
 * @returns {boolean} Check result.
 */

function isDate(input) {
  return ((isObjectAny(input) && input instanceof Date) ? true : false)
}

/**
 * isPromise
 */

/**
 * When the input value is the "Promise" object, returns "true".
 * Returns "false" in all other cases!
 * @since 1.0.0
 * @param {*} input - Any type of data.
 * @returns {boolean} Check result.
 */

function isPromise(input) {
  return ((isObjectAny(input) && input instanceof Promise) ? true : false)
}

/**
 * isObjectAny & isObject & isObjectEmpty & isObjectNotEmpty
 */

/**
 * When the input value is of type "object", returns "true".
 * Returns "false" in all other cases!
 * @since 1.0.0
 * @param {*} input - Any type of data.
 * @returns {boolean} Check result.
 */

function isObjectAny(input) {
  return ((isExists(input) && typeof input === 'object') ? true : false)
}

/**
 * When the input value is of type "object" and is not one of the objects from the following list: "Boolean", "Number", "String", "RegExp", "Array", "Set", "Map", "Date" or "Promise", returns "true".
 * Returns "false" in all other cases!
 * @since 1.0.0
 * @param {*} input - Any type of data.
 * @returns {boolean} Check result.
 */

function isObject(input) {
  return (
    (
      isObjectAny(input) &&
      !isBooleanObject(input) &&
      !isNumberObject(input) &&
      !isStringObject(input) &&
      !isRegExp(input) &&
      !isArray(input) &&
      !isSet(input) &&
      !isMap(input) &&
      !isDate(input) &&
      !isPromise(input)
    )
      ? true
      : false
  )
}

/**
 * When the input value is of type "object", satisfies the conditions for checking the function "isObject()", and is also empty, returns "true".
 * Returns "false" in all other cases!
 * @since 1.0.0
 * @param {*} input - Any type of data.
 * @returns {boolean} Check result.
 */

function isObjectEmpty(input) {
  return ((isObject(input) && Object.keys(input).length === 0) ? true : false)
}

/**
 * When the input value is of type "object", satisfies the conditions for checking the function "isObject()", and is also not empty, returns "true".
 * Returns "false" in all other cases!
 * @since 1.0.0
 * @param {*} input - Any type of data.
 * @returns {boolean} Check result.
 */

function isObjectNotEmpty(input) {
  return ((isObject(input) && Object.keys(input).length > 0) ? true : false)
}

/**
 * isSymbol
 */

/**
 * When the input value is of type "symbol", returns "true".
 * Returns "false" in all other cases!
 * @since 1.0.0
 * @param {*} input - Any type of data.
 * @returns {boolean} Check result.
 */

function isSymbol(input) {
  return ((isExists(input) && typeof input === 'symbol') ? true : false)
}
