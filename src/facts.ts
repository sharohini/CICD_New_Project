import { getFactsList } from "./requests";
import { FactsDefinition } from "./types";

/**
 * Validate if per_page property in the response has the same number of facts
 * than the actual list of facts
 * @returns boolean
 */
export const validateFactsQuantity = async (): Promise<boolean> => {
  try {
    const received: FactsDefinition | undefined = await getFactsList();
    if (!received) throw Error;
    const { per_page, data } = received;
    return per_page === data.length;
  } catch (error) {
    return false;
  }
};

/**
 * Validate that current page is always 1
 */
export const validateCurrentPage = async (): Promise<boolean> => {
  try {
    const received: FactsDefinition | undefined = await getFactsList();
    if (!received) throw Error;
    return received.current_page == 1;
  } catch (error) {
    return false;
  }
};
