export const unhandledTyles = (value: never): value is never => {
  throw new Error(`Unhandled value ${value}`);
};
