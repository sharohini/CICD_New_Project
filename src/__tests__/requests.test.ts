import { isResponseValid, getFact, getFactsList } from "../requests";
import axios from "axios";
import { FactsDefinition } from "../types";

describe("isResponseValid", () => {
  it("should return true when status is 200", () => {
    expect(isResponseValid(200)).toBeTruthy();
    expect(isResponseValid(202)).toBeFalsy();
    expect(isResponseValid(404)).toBeFalsy();
  });
});

describe("getFact", () => {
  it("should return FactDefinition", async () => {
    const resp = { status: 200, data: { fact: "mock fact", length: 9 } };
    jest
      .spyOn(axios, "get")
      .mockImplementationOnce(() => Promise.resolve(resp));
    const fact = await getFact("valid path");
    expect(fact).toStrictEqual(resp.data);
  });
  it("should return undefined when response is invalid", async () => {
    const resp = { status: 404 };
    jest
      .spyOn(axios, "get")
      .mockImplementationOnce(() => Promise.resolve(resp));
    const fact = await getFact("valid path");
    expect(fact).toBeUndefined();
  });
});
describe("getFactsList", () => {
  const list: FactsDefinition = {
    current_page: 1,
    data: [
      { fact: "cats are cute", length: 13 },
      { fact: "fact 2", length: 6 },
      { fact: "fact 3", length: 6 },
    ],
    per_page: 3,
  };
  it("should return FactsDefinition", async () => {
    const resp = { status: 200, data: list };
    jest
      .spyOn(axios, "get")
      .mockImplementationOnce(() => Promise.resolve(resp));
    const fact = await getFactsList();
    expect(fact).toStrictEqual(list);
  });
  it("should return undefined when response is invalid", async () => {
    const resp = { status: 404 };
    jest
      .spyOn(axios, "get")
      .mockImplementationOnce(() => Promise.resolve(resp));
    const fact = await getFactsList();
    expect(fact).toBeUndefined();
  });
});
