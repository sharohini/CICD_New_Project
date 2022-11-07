"use strict";
import { BASE_URL } from "./constants";
import axios from "axios";
import { FactDefinition, FactsDefinition } from "./types";

/**
 * Request cats fact service
 * @return FactDefinition or undefined
 * @FactDefinition fact: string; length: number;
 */
export const getFact = async (
  path: string
): Promise<FactDefinition | undefined> => {
  const response = await axios.get(`${BASE_URL}${path}`);
  if (isResponseValid(response.status)) {
    return response.data as FactDefinition;
  }
  return undefined;
};

/**
 * Request a list of cat facts
 * @return FactsDefinition or undefined
 */
export const getFactsList = async (): Promise<FactsDefinition | undefined> => {
  const response = await axios.get(`${BASE_URL}/facts`);
  if (isResponseValid(response.status)) {
    return response.data as FactsDefinition;
  }
  return undefined;
};

export const isResponseValid = (status: number) => {
  return status === 200;
};
