'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.GraphQLBigInt = exports.GraphQLBigIntConfig = void 0;
/* eslint-disable @typescript-eslint/ban-types */
const graphql_1 = require('graphql');
const error_js_1 = require('../error.js');
const utilities_js_1 = require('./utilities.js');
let warned = false;
function isSafeInteger(val) {
  return val <= Number.MAX_SAFE_INTEGER && val >= Number.MIN_SAFE_INTEGER;
}
function serializeSafeBigInt(val) {
  if (isSafeInteger(val)) {
    return Number(val);
  }
  if ('toJSON' in BigInt.prototype) {
    return val;
  }
  if (!warned) {
    warned = true;
    console.warn(
      'By default, BigInts are not serialized to JSON as numbers but instead as strings which may lead an unintegrity in your data. ' +
        'To fix this, you can use "json-bigint-patch" to enable correct serialization for BigInts.',
    );
  }
  return val.toString();
}
exports.GraphQLBigIntConfig = {
  name: 'BigInt',
  description: 'The `BigInt` scalar type represents non-fractional signed whole numeric values.',
  serialize(outputValue) {
    const coercedValue = (0, utilities_js_1.serializeObject)(outputValue);
    let num = coercedValue;
    if (typeof coercedValue === 'object' && coercedValue != null && 'toString' in coercedValue) {
      num = BigInt(coercedValue.toString());
      if (num.toString() !== coercedValue.toString()) {
        throw (0, error_js_1.createGraphQLError)(
          `BigInt cannot represent non-integer value: ${coercedValue}`,
        );
      }
    }
    if (typeof coercedValue === 'boolean') {
      num = BigInt(coercedValue);
    }
    if (typeof coercedValue === 'string' && coercedValue !== '') {
      num = BigInt(coercedValue);
      if (num.toString() !== coercedValue) {
        throw (0, error_js_1.createGraphQLError)(
          `BigInt cannot represent non-integer value: ${coercedValue}`,
        );
      }
    }
    if (typeof coercedValue === 'number') {
      if (!Number.isInteger(coercedValue)) {
        throw (0, error_js_1.createGraphQLError)(
          `BigInt cannot represent non-integer value: ${coercedValue}`,
        );
      }
      num = BigInt(coercedValue);
    }
    if (typeof num !== 'bigint') {
      throw (0, error_js_1.createGraphQLError)(
        `BigInt cannot represent non-integer value: ${coercedValue}`,
      );
    }
    return serializeSafeBigInt(num);
  },
  parseValue(inputValue) {
    const bigint = BigInt(inputValue.toString());
    if (inputValue.toString() !== bigint.toString()) {
      throw (0, error_js_1.createGraphQLError)(`BigInt cannot represent value: ${inputValue}`);
    }
    return bigint;
  },
  parseLiteral(valueNode) {
    if (!('value' in valueNode)) {
      throw (0, error_js_1.createGraphQLError)(
        `BigInt cannot represent non-integer value: ${(0, graphql_1.print)(valueNode)}`,
        {
          nodes: valueNode,
        },
      );
    }
    const strOrBooleanValue = valueNode.value;
    const bigint = BigInt(strOrBooleanValue);
    if (strOrBooleanValue.toString() !== bigint.toString()) {
      throw (0, error_js_1.createGraphQLError)(
        `BigInt cannot represent value: ${strOrBooleanValue}`,
      );
    }
    return bigint;
  },
  extensions: {
    codegenScalarType: 'bigint',
    jsonSchema: {
      type: 'integer',
      format: 'int64',
    },
  },
};
exports.GraphQLBigInt = new graphql_1.GraphQLScalarType(exports.GraphQLBigIntConfig);
