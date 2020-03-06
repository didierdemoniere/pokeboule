import { CATCH_POKEMON, reducer } from "./encounter";

test("no pokemon = no catch", () => {
  const expected = {
    catch: false
  };
  expect(reducer(undefined, { type: CATCH_POKEMON })).toStrictEqual(expected);
});

test("already catched", () => {
  const initial = { pokemon: { id: 0, name: "bulbasaur" }, catch: true };
  const expected = initial;

  expect(reducer(initial, { type: CATCH_POKEMON })).toBe(expected);
});
