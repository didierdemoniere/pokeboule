/**
 * generate a random number between 2 bounds
 * @param from
 * @param to
 */
export function randomIntegerBetween(from: number, to: number) {
  return Math.floor(Math.random() * to) + from;
}
