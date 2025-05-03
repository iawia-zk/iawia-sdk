export enum ZKType {
  NATIONALITY_IS_TUR = "NATIONALITY_IS_TUR",
  NATIONALITY_IS_NOT_TUR = "NATIONALITY_IS_NOT_TUR",
  AGE_IS_OVER_18 = "AGE_IS_OVER_18",
  AGE_IS_OVER_24 = "AGE_IS_OVER_24",
  AGE_IS_UNDER_18 = "AGE_IS_UNDER_18",
  GENDER_IS_MAN = "GENDER_IS_MAN",
  GENDER_IS_WOMAN = "GENDER_IS_WOMAN",
  PASSPORT_ID_IS_VALID = "PASSPORT_ID_IS_VALID",
  NATIONALITY_ID_IS_VALID = "NATIONALITY_ID_IS_VALID",
}

const MAP: Record<ZKType, { circuitPath: string }> = {
  [ZKType.NATIONALITY_IS_TUR]: {
    circuitPath: "circuits/temp/nationality_is_tur_circuit.js",
  },
  [ZKType.NATIONALITY_IS_NOT_TUR]: {
    circuitPath: "circuits/temp/nationality_is_not_tur_circuit.js",
  },
  [ZKType.AGE_IS_OVER_18]: {
    circuitPath: "circuits/temp/age_over_18_circuit.js",
  },
  [ZKType.AGE_IS_OVER_24]: {
    circuitPath: "circuits/temp/age_over_24_circuit.js",
  },
  [ZKType.AGE_IS_UNDER_18]: {
    circuitPath: "circuits/temp/age_under_18_circuit.js",
  },
  [ZKType.GENDER_IS_MAN]: {
    circuitPath: "circuits/temp/gender_is_man_circuit.js",
  },
  [ZKType.GENDER_IS_WOMAN]: {
    circuitPath: "circuits/temp/gender_is_woman_circuit.js",
  },
  [ZKType.PASSPORT_ID_IS_VALID]: {
    circuitPath: "circuits/temp/passport_id_is_valid_circuit.js",
  },
  [ZKType.NATIONALITY_ID_IS_VALID]: {
    circuitPath: "circuits/temp/nationality_id_is_valid_circuit.js",
  },
};

export function getCircuitPathByZkType(zkType: ZKType) {
  return MAP[zkType].circuitPath;
}
