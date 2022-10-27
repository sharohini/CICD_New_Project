import { FACT } from "./constants";
import { getFact } from "./requests";
import { FactDefinition } from "./types";

export const validateLenght = async (): Promise<boolean> => {
  try {
    const received: FactDefinition | undefined = await getFact(FACT);
    if (!received) throw Error;
    return received.fact.length === received.length;
  } catch (error) {
    return false;
  }
};
