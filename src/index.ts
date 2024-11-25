import { hello } from "./greeting";

export const log = (...args: string[]) => {
  console.log(...args);
};

log(hello("unbuild"));
