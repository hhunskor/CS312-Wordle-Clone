import { render, screen } from "@testing-library/react";

import Guess from "../components/Guess";

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

describe("Guesses visibility", () => {
  test("Smoke test", () => {
    render(<Guess tiles={tiles} />);
  });
  test("Snapshot test", () => {
    const { container } = render(<Guess tiles={tiles} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

const sampleGuesses = ["lines", "bagel", "match", "chart"];

describe("Guesses render", () => {
  test("Guesses populate based on tile elements", () => {
    sampleGuesses.forEach((sampleGuess) => {
      for (let i = 0; i < sampleGuess.length; i++) {
        const guessedLetter = sampleGuess.charAt(i).toUpperCase();
        tiles[i] = {
          tile: i,
          letter: guessedLetter,
          color: "black",
        };
      }
      render(<Guess tiles={tiles} />);
      const uppercaseLetter = sampleGuess.charAt(0).toUpperCase();
      // console.log(uppercaseLetter);
      expect(screen.getByText({ uppercaseLetter })).toBeVisible();
    });
  });
});
