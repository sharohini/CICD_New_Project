import { validateLenght } from "./fact";
import { validateFactsQuantity, validateCurrentPage } from "./facts";

export const start = async () => {
  const failed = [];
  if (!(await validateFactsQuantity())) {
    failed.push("validateFactsQuantity failed");
  }
  if (!(await validateCurrentPage())) {
    failed.push("validateCurrentPage failed");
  }
  if (!(await validateLenght())) {
    failed.push("validateLenght failed");
  }

  if (failed.length === 0) {
    console.log("All test passed");
  } else {
    console.log("Test Failed:");
    failed.forEach((f) => console.log(f));
  }
};

start();
