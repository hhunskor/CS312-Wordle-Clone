import { render, screen, fireEvent } from "@testing-library/react";
import Main from "../pages/index";

/**
 * This is a placeholder test that is here only to make sure `npm test` will not choke because there are no tests. It should be removed as soon as you write a real test.
 */

const alphabet = [
  {
    letter: "A",
    guessed: false,
    guessedInWord: false,
    guessedInPlace: false,
  },
  {
    letter: "B",
    guessed: false,
    guessedInWord: false,
    guessedInPlace: false,
  },
  {
    letter: "C",
    guessed: false,
    guessedInWord: false,
    guessedInPlace: false,
  },
  {
    letter: "D",
    guessed: false,
    guessedInWord: false,
    guessedInPlace: false,
  },
  {
    letter: "E",
    guessed: false,
    guessedInWord: false,
    guessedInPlace: false,
  },
  {
    letter: "F",
    guessed: false,
    guessedInWord: false,
    guessedInPlace: false,
  },
  {
    letter: "G",
    guessed: false,
    guessedInWord: false,
    guessedInPlace: false,
  },
  {
    letter: "H",
    guessed: false,
    guessedInWord: false,
    guessedInPlace: false,
  },
  {
    letter: "I",
    guessed: false,
    guessedInWord: false,
    guessedInPlace: false,
  },
  {
    letter: "J",
    guessed: false,
    guessedInWord: false,
    guessedInPlace: false,
  },
  {
    letter: "K",
    guessed: false,
    guessedInWord: false,
    guessedInPlace: false,
  },
  {
    letter: "L",
    guessed: false,
    guessedInWord: false,
    guessedInPlace: false,
  },
  {
    letter: "M",
    guessed: false,
    guessedInWord: false,
    guessedInPlace: false,
  },
  {
    letter: "N",
    guessed: false,
    guessedInWord: false,
    guessedInPlace: false,
  },
  {
    letter: "O",
    guessed: false,
    guessedInWord: false,
    guessedInPlace: false,
  },
  {
    letter: "P",
    guessed: false,
    guessedInWord: false,
    guessedInPlace: false,
  },
  {
    letter: "Q",
    guessed: false,
    guessedInWord: false,
    guessedInPlace: false,
  },
  {
    letter: "R",
    guessed: false,
    guessedInWord: false,
    guessedInPlace: false,
  },
  {
    letter: "S",
    guessed: false,
    guessedInWord: false,
    guessedInPlace: false,
  },
  {
    letter: "T",
    guessed: false,
    guessedInWord: false,
    guessedInPlace: false,
  },
  {
    letter: "U",
    guessed: false,
    guessedInWord: false,
    guessedInPlace: false,
  },
  {
    letter: "V",
    guessed: false,
    guessedInWord: false,
    guessedInPlace: false,
  },
  {
    letter: "W",
    guessed: false,
    guessedInWord: false,
    guessedInPlace: false,
  },
  {
    letter: "X",
    guessed: false,
    guessedInWord: false,
    guessedInPlace: false,
  },
  {
    letter: "Y",
    guessed: false,
    guessedInWord: false,
    guessedInPlace: false,
  },
  {
    letter: "Z",
    guessed: false,
    guessedInWord: false,
    guessedInPlace: false,
  },
];
const tiles = [
  {
    tile: 0,
    letter: "",
    color: "black",
  },
  {
    tile: 1,
    letter: "",
    color: "black",
  },
  {
    tile: 2,
    letter: "",
    color: "black",
  },
  {
    tile: 3,
    letter: "",
    color: "black",
  },
  {
    tile: 4,
    letter: "",
    color: "black",
  },
  {
    tile: 5,
    letter: "",
    color: "black",
  },
  {
    tile: 6,
    letter: "",
    color: "black",
  },
  {
    tile: 7,
    letter: "",
    color: "black",
  },
  {
    tile: 8,
    letter: "",
    color: "black",
  },
  {
    tile: 9,
    letter: "",
    color: "black",
  },
  {
    tile: 10,
    letter: "",
    color: "black",
  },
  {
    tile: 11,
    letter: "",
    color: "black",
  },
  {
    tile: 12,
    letter: "",
    color: "black",
  },
  {
    tile: 13,
    letter: "",
    color: "black",
  },
  {
    tile: 14,
    letter: "",
    color: "black",
  },
  {
    tile: 15,
    letter: "",
    color: "black",
  },
  {
    tile: 16,
    letter: "",
    color: "black",
  },
  {
    tile: 17,
    letter: "",
    color: "black",
  },
  {
    tile: 18,
    letter: "",
    color: "black",
  },
  {
    tile: 19,
    letter: "",
    color: "black",
  },
  {
    tile: 20,
    letter: "",
    color: "black",
  },
  {
    tile: 21,
    letter: "",
    color: "black",
  },
  {
    tile: 22,
    letter: "",
    color: "black",
  },
  {
    tile: 23,
    letter: "",
    color: "black",
  },
  {
    tile: 24,
    letter: "",
    color: "black",
  },
  {
    tile: 25,
    letter: "",
    color: "black",
  },
  {
    tile: 26,
    letter: "",
    color: "black",
  },
  {
    tile: 27,
    letter: "",
    color: "black",
  },
  {
    tile: 28,
    letter: "",
    color: "black",
  },
  {
    tile: 29,
    letter: "",
    color: "black",
  },
];
const updatedTiles = [
  {
    tile: 0,
    letter: "G",
    color: "green",
  },
  {
    tile: 1,
    letter: "U",
    color: "green",
  },
  {
    tile: 2,
    letter: "E",
    color: "gray",
  },
  {
    tile: 3,
    letter: "S",
    color: "gray",
  },
  {
    tile: 4,
    letter: "S",
    color: "gray",
  },
  {
    tile: 5,
    letter: "",
    color: "black",
  },
  {
    tile: 6,
    letter: "",
    color: "black",
  },
  {
    tile: 7,
    letter: "",
    color: "black",
  },
  {
    tile: 8,
    letter: "",
    color: "black",
  },
  {
    tile: 9,
    letter: "",
    color: "black",
  },
  {
    tile: 10,
    letter: "",
    color: "black",
  },
  {
    tile: 11,
    letter: "",
    color: "black",
  },
  {
    tile: 12,
    letter: "",
    color: "black",
  },
  {
    tile: 13,
    letter: "",
    color: "black",
  },
  {
    tile: 14,
    letter: "",
    color: "black",
  },
  {
    tile: 15,
    letter: "",
    color: "black",
  },
  {
    tile: 16,
    letter: "",
    color: "black",
  },
  {
    tile: 17,
    letter: "",
    color: "black",
  },
  {
    tile: 18,
    letter: "",
    color: "black",
  },
  {
    tile: 19,
    letter: "",
    color: "black",
  },
  {
    tile: 20,
    letter: "",
    color: "black",
  },
  {
    tile: 21,
    letter: "",
    color: "black",
  },
  {
    tile: 22,
    letter: "",
    color: "black",
  },
  {
    tile: 23,
    letter: "",
    color: "black",
  },
  {
    tile: 24,
    letter: "",
    color: "black",
  },
  {
    tile: 25,
    letter: "",
    color: "black",
  },
  {
    tile: 26,
    letter: "",
    color: "black",
  },
  {
    tile: 27,
    letter: "",
    color: "black",
  },
  {
    tile: 28,
    letter: "",
    color: "black",
  },
  {
    tile: 29,
    letter: "",
    color: "black",
  },
];

describe("Homepage visibility", () => {
  let testAlphabet;
  let testTiles;

  beforeEach(() => {
    testAlphabet = alphabet.map((x) => ({ ...x }));
    testTiles = tiles.map((x) => ({ ...x }));
  });

  test("Smoke test", () => {
    render(
      <Main
        alphabet={testAlphabet}
        setAlphabet={jest.fn()}
        tiles={testTiles}
        setTiles={jest.fn()}
      />
    );
  });
  test("Title Visible", () => {
    render(
      <Main
        alphabet={testAlphabet}
        setAlphabet={jest.fn()}
        tiles={testTiles}
        setTiles={jest.fn()}
      />
    );
    expect(screen.getByText("A Middlebury Wordle Project")).toBeVisible();
  });
  test("Snapshot test", () => {
    const { container } = render(
      <Main
        alphabet={testAlphabet}
        setAlphabet={jest.fn()}
        tiles={testTiles}
        setTiles={jest.fn()}
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});

describe.skip("Submit button updates", () => {
  let testAlphabet;
  let testTiles;
  let testUpdatedTiles;
  const firstGuess = "guess";

  beforeEach(() => {
    testAlphabet = alphabet.map((x) => ({ ...x }));
    testTiles = tiles.map((x) => ({ ...x }));
    testUpdatedTiles = updatedTiles.map((x) => ({ ...x }));
  });

  afterEach(() => {
    jest.clearAllMocks;
  });

  const setTilesMock = jest.fn();
  const setAlphabetMock = jest.fn();

  test("Submit button updates tiles.json", () => {
    render(
      <Main
        alphabet={testAlphabet}
        setAlphabet={setAlphabetMock}
        tiles={testTiles}
        setTiles={setTilesMock}
      />
    );

    const inputBox = screen.getByTestId("Input");
    const submit = screen.getByTestId("Submit");
    const trueWord = screen.getByTitle("correctWord");

    fireEvent.change(inputBox, {
      target: { value: firstGuess },
    });

    fireEvent.change(trueWord, {
      target: { value: "guard" },
    });

    fireEvent.click(submit);
    const newTiles = setTilesMock.mock.calls[0][0];

    expect(newTiles).toBe(testUpdatedTiles);
  });
});
