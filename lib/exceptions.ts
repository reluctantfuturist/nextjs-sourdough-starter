export class RequiresProPlanError extends Error {
  constructor(message = "This action requires a Personal or a Pro plan") {
    super(message)
  }
}
