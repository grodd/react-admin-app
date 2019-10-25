import * as Types from "./actionTypes";
export function createAction(course) {
  return { type: Types.CREATE_COURSE, course };
}
