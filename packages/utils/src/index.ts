import { z } from "zod";

export const helloWorld = () => {
  return "Hello from @forge/utils";
};

export const IdSchema = z.string().uuid();
