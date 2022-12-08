import Popup from "./Popup";
import ReactTestUtils from "react-dom/test-utils";
//import { render } from "@testing-library/react";
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

  test.skip("popup is not visible initially", () => {
    main.setState({ setShowStats: false });
    expect(main.state("setShowStats")).toBe(false);
  });

  test.skip("popup is visible after game is over", () => {
    main.setState({ setShowStats: true });
    const popup = ReactTestUtils.findRenderedComponentWithType(main, Popup);
    expect(popup).toBeDefined();
  });
});
