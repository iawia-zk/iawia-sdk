import { getCircuitPathByZkType, ZKType } from "../../enums/ZKType";
import {
  FALSY_CIRCUIT,
  TRUTHY_CIRCUIT,
  ZK_RANDOM_FUNCTION_COUNT,
} from "./verificationService.constants";
import { TGenerateRandomFunctionsResponse } from "./verificationService.types";

export function generateRandomFunctions(
  zkTypes: ZKType[]
): TGenerateRandomFunctionsResponse {
  const randomBooleanArray = Array.from(
    { length: ZK_RANDOM_FUNCTION_COUNT },
    () => Math.random() < 0.5
  );

  const randomIndexes = getUniqueRandomNumbers(
    zkTypes.length,
    ZK_RANDOM_FUNCTION_COUNT
  );

  const functions = getRandomFunctions(
    randomBooleanArray,
    zkTypes,
    randomIndexes
  );

  // expect the zk results to be true
  randomIndexes.forEach((index) => {
    randomBooleanArray[index] = true;
  });

  return {
    circuitPaths: functions,
    expectedResults: randomBooleanArray,
  };
}

function getRandomFunctions(
  randomBooleanArray: boolean[],
  zkTypes: ZKType[],
  randomIndexes: number[]
): string[] {
  const randomFunctions = [];
  let zkIndex = 0;
  for (let i = 0; i < randomIndexes.length; i++) {
    if (randomIndexes.includes(i)) {
      randomFunctions.push(getCircuitPathByZkType(zkTypes[zkIndex]));
      zkIndex++;
    } else {
      if (randomBooleanArray[i]) {
        randomFunctions.push(TRUTHY_CIRCUIT);
      } else {
        randomFunctions.push(FALSY_CIRCUIT);
      }
    }
  }

  return randomFunctions;
}

function getUniqueRandomNumbers(count: number, max: number): number[] {
  if (count > max)
    throw new Error("Cannot generate more unique numbers than the range size.");

  const numbers: number[] = [];
  while (numbers.length < count) {
    const rand = Math.floor(Math.random() * max);
    numbers.push(rand);
  }

  return numbers;
}
