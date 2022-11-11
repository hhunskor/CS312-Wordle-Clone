import { render, screen } from "@testing-library/react";

import Main from "../pages/index";

/**
 * This is a placeholder test that is here only to make sure `npm test` will not choke because there are no tests. It should be removed as soon as you write a real test.
 */

describe("Homepage visibility", () => {
  test("Smoke test", () => {
    render(<Main />);
  });
  test("Title Visible", () => {
    render(<Main />);
    expect(screen.getByText("A Middlebury Wordle Project")).toBeVisible();
  });
  test("Snapshot test", () => {
    const { container } = render(<Main />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
