import { validateFactsQuantity, validateCurrentPage } from "../facts";
import * as Requests from "../requests";
import { FactsDefinition } from "../types";

const list: FactsDefinition = {
    current_page: 1,
    data: [{ fact: "cats are cute", length: 13 }, { fact: "fact 2", length: 6 }, { fact: "fact 3", length: 6 }],
    per_page: 3,
}
describe("validateFactsQuantity", () => {
    it("should return true if same amount of facts than the per_page prop claims", async () => {
        jest.spyOn(Requests, "getFactsList").mockImplementationOnce(() => Promise.resolve(list))
        const response = await validateFactsQuantity();
        expect(response).toBeTruthy();
    })
    it("should return false if received diff amount of facts than the per_page prop claims", async () => {
        const list2: FactsDefinition = { ...list, per_page: 10 }
        jest.spyOn(Requests, "getFactsList").mockImplementationOnce(() => Promise.resolve(list2))
        const response = await validateFactsQuantity();
        expect(response).toBeFalsy();
    })
    it("should return false if service return nothing", async () => {
        jest.spyOn(Requests, "getFactsList").mockImplementationOnce(() => Promise.resolve(undefined))
        const response = await validateFactsQuantity();
        expect(response).toBeFalsy();
    })
});

describe("validateCurrentPage", () => {
    it("should return true if current page is 1", async () => {
        jest.spyOn(Requests, "getFactsList").mockImplementationOnce(() => Promise.resolve(list))
        const resp = await validateCurrentPage();
        expect(resp).toBeTruthy();
    })
    it("should return false if current page is different than 1", async () => {
        const list2: FactsDefinition = { ...list, current_page: 5 }
        jest.spyOn(Requests, "getFactsList").mockImplementationOnce(() => Promise.resolve(list2))
        const resp = await validateCurrentPage();
        expect(resp).toBeFalsy();
    })
});