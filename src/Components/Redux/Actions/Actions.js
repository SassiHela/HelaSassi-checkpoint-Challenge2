/*
 * action creators
 */
import { FETCH_USER, FETCH_POST, FETCH_COMMENT } from "./ActionsType";
export function fetchUser(user) {
  return { type: FETCH_USER, payload: user };
}
export function fetchPost(post) {
  return { type: FETCH_POST, payload: post };
}
export function fetchComment(comment) {
  return { type: FETCH_COMMENT, payload: comment };
}
