import { getRequest } from "./axios_config";
import { BASE_URL } from "./constants";


export const getFact = async () => {
    await getRequest(BASE_URL + "/fact");
}