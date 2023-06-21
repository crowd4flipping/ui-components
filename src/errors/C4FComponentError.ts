export class C4FComponentError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "C4F_COMPONENT_LIBRARY_ERROR";
  }
}
