declare const BigIntMock: () => bigint;
declare const ByteMock: () => Uint8Array;
declare const DateMock: () => string;
export declare const Time: () => string;
export declare const DateTime: () => string;
export declare const DateTimeISO: () => string;
export declare const TimeZone: () => string;
export declare const UtcOffset: () => string;
export declare const Duration: () => string;
export declare const LocalDate: () => string;
export declare const LocalTime: () => string;
export declare const LocalDateTime: () => string;
export declare const LocalEndTime: () => string;
export declare const EmailAddress: () => string;
export declare const NegativeFloat: () => number;
export declare const NegativeInt: () => number;
export declare const NonEmptyString: () => string;
export declare const NonNegativeFloat: () => number;
export declare const NonNegativeInt: () => number;
export declare const NonPositiveFloat: () => number;
export declare const NonPositiveInt: () => number;
export declare const PhoneNumber: () => string;
export declare const ObjectID: () => string;
export declare const PositiveFloat: () => number;
export declare const PositiveInt: () => number;
export declare const PostalCode: () => string;
declare const URLMock: () => any;
export declare const UUID: () => string;
export declare const HexColorCode: () => string;
export declare const Hexadecimal: () => string;
export declare const HSL: () => string;
export declare const HSLA: () => string;
export declare const IP: () => string;
export declare const IPv4: () => string;
export declare const IPv6: () => string;
export declare const MAC: () => string;
export declare const Port: () => number;
export declare const RGB: () => string;
export declare const RGBA: () => string;
export declare const ISBN: () => string;
export declare const JWT: () => string;
export declare const Latitude: () => number;
export declare const Longitude: () => number;
export declare const USCurrency: () => number;
export declare const Currency: () => string;
export declare const JSON: () => {};
export declare const JSONObject: () => {};
export declare const IBAN: () => string;
export declare const Void: () => null;
export declare const SafeInt: () => number;
export declare const DID: () => string;
export declare const CountryCode: () => string;
export declare const Locale: () => string;
export declare const RoutingNumber: () => string;
export declare const AccountNumber: () => string;
export declare const Cuid: () => string;
export declare const SemVer: () => string;
export declare const DeweyDecimal: () => string;
export declare const LCCSubclass: () => string;
export declare const IPCPatent: () => string;
export {
  DateMock as Date,
  URLMock as URL,
  NonNegativeInt as UnsignedInt,
  NonNegativeFloat as UnsignedFloat,
  UUID as GUID,
  BigIntMock as Long,
  BigIntMock as BigInt,
  ByteMock as Byte,
  Duration as ISO8601Duration,
};