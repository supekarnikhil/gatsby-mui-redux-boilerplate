import * as React from "react";
import { render } from "@testing-library/react";

import ProTip from "./ProTip";

describe(`header`, () => {
  it(`renders Pro tip`, () => {
    expect.assertions(2);

    const { getByTestId } = render(<ProTip />);

    expect(getByTestId("protip-link")).toHaveAttribute(
      "href",
      "https://mui.com/getting-started/templates/"
    );

    expect(getByTestId("lightbuild-icon")).toBeVisible();
  });
});
