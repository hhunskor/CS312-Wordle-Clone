import { render, screen, fireEvent } from "@testing-library/react";
import Main from "../pages/index";
import words from "../../data/words.json";
import tiles from "../../data/tiles.json";
import alphabet from "../../data/alphabet.json";
/**
 * This is a placeholder test that is here only to make sure `npm test` will not choke because there are no tests. It should be removed as soon as you write a real test.
 */

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
        arrayWords={words}
        correctWord={"guard"}
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
        arrayWords={words}
        correctWord={"guard"}
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
        arrayWords={words}
        correctWord={"guard"}
        alphabet={testAlphabet}
        setAlphabet={jest.fn()}
        tiles={testTiles}
        setTiles={jest.fn()}
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Submit button updates", () => {
  let testAlphabet;
  let testTiles;

  const firstGuess = "guess";
  const updatedTiles = tiles.map((x) => {
    if (x.tile === 0) return { tile: 0, letter: "G", color: "green" };
    else if (x.tile === 1) return { tile: 1, letter: "U", color: "green" };
    else if (x.tile === 2) return { tile: 2, letter: "E", color: "gray" };
    else if (x.tile === 3) return { tile: 3, letter: "S", color: "gray" };
    else if (x.tile === 4) return { tile: 4, letter: "S", color: "gray" };
    else if (x.tile > 4) return x;
  });

  const updatedAlphabet = alphabet.map((x) => {
    if (x.letter === "G")
      {return {
        letter: "G",
        guessed: true,
        guessedInWord: true,
        guessedInPlace: true,
      };}
    else if (x.letter === "U")
      {return {
        letter: "U",
        guessed: true,
        guessedInWord: true,
        guessedInPlace: true,
      };}
    else if (x.letter === "E")
      {return {
        letter: "E",
        guessed: true,
        guessedInWord: false,
        guessedInPlace: false,
      };}
    else if (x.letter === "S")
      {return {
        letter: "S",
        guessed: true,
        guessedInWord: false,
        guessedInPlace: false,
      };}
    else return x;
  });

  beforeEach(() => {
    testAlphabet = alphabet.map((x) => ({ ...x }));
    testTiles = tiles.map((x) => ({ ...x }));
  });

  afterEach(() => {
    jest.clearAllMocks;
  });

  const setTilesMock = jest.fn();
  const setAlphabetMock = jest.fn();

  test("Submit button updates tiles.json", () => {
    render(
      <Main
        arrayWords={words}
        correctWord={"GUARD"}
        alphabet={testAlphabet}
        setAlphabet={setAlphabetMock}
        tiles={testTiles}
        setTiles={setTilesMock}
      />
    );

    const inputBox = screen.getByTestId("Input");
    const submit = screen.getByTestId("Submit");

    fireEvent.change(inputBox, {
      target: { value: firstGuess },
    });

    expect(inputBox.value).toBe("guess");

    fireEvent.click(submit);
    const newTiles = setTilesMock.mock.calls[0][0];
    expect(newTiles).toEqual(updatedTiles);
  });

  test("Submit button updates alphabet.json", () => {
    render(
      <Main
        arrayWords={words}
        correctWord={"GUARD"}
        alphabet={testAlphabet}
        setAlphabet={setAlphabetMock}
        tiles={testTiles}
        setTiles={setTilesMock}
      />
    );

    const inputBox = screen.getByTestId("Input");
    const submit = screen.getByTestId("Submit");

    fireEvent.change(inputBox, {
      target: { value: firstGuess },
    });

    expect(inputBox.value).toBe("guess");

    fireEvent.click(submit);
    const newAlphabet = setAlphabetMock.mock.calls[0][0];
    expect(newAlphabet).toEqual(updatedAlphabet);
  });
});
