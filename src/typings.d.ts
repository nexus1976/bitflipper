interface IBitValueObject {
  bitPos: number,
  bitValue: boolean
}
interface IBitnessValueObject {
  bitnessValue: BitnessEnum,
  bitnessDisplay: String
}
declare enum BitnessEnum {
  Bitness8 = 0,
  Bitness16 = 1,
  Bitness32 = 2,
  Bitness64 = 3
}
