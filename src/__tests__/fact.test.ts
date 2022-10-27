import { validateLenght } from "../fact";
import * as Requests from "../requests";
import { FactDefinition } from "../types";

describe("validateLenght", () => {
  it("should return true when fact lenght is the same as the received property called length", async () => {
    const fact: FactDefinition = {
      fact: "Retractable claws are a physical phenomenon that sets cats apart from the rest of the animal kingdom. I n the cat family, only cheetahs cannot retract their claws.",
      length: 163,
    };
    jest
      .spyOn(Requests, "getFact")
      .mockImplementationOnce(() => Promise.resolve(fact));
    const response = await validateLenght();
    expect(response).toBeTruthy();
  });
  it("should return false if fact length is different than lenght prop", async () => {
    const fact: FactDefinition = {
      fact: "Retractable claws are a physical phenomenon that sets cats apart from the rest of the animal kingdom. In the cat family, only cheetahs cannot retract their claws.",
      length: 163,
    };
    jest
      .spyOn(Requests, "getFact")
      .mockImplementationOnce(() => Promise.resolve(fact));
    const response = await validateLenght();
    expect(response).toBeFalsy();
  });
  it("should return false if service return nothing", async () => {
    jest
      .spyOn(Requests, "getFact")
      .mockImplementationOnce(() => Promise.resolve(undefined));
    const response = await validateLenght();
    expect(response).toBeFalsy();
  });
});
