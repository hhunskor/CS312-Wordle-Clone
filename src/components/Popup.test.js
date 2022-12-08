//import Popup from "./Popup";
import { render } from "@testing-library/react";
import Main from "../pages/index";
import words from "../../data/words.json";
import tiles from "../../data/tiles.json";
import alphabet from "../../data/alphabet.json";

describe("Popup visibility", () => {
  let testAlphabet;
  let testTiles;
  let main;

  beforeEach(() => {
    testAlphabet = alphabet.map((x) => ({ ...x }));
    testTiles = tiles.map((x) => ({ ...x }));
    main = render(
      <Main
        arrayWords={words}
        correctWord={"guard"}
        alphabet={testAlphabet}
        setAlphabet={jest.fn()}
        tiles={testTiles}
        setTiles={jest.fn()}
      />
    );
  });

  test("Main renders (placeholder test so suite passes before I add more)", () => {
    expect(main).toBeVisible;
  });
});
