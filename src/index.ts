import { hello } from "./greeting.js";

export const log = (...args: string[]) => {
  console.log(...args);
};

log(hello("unbuild"));
