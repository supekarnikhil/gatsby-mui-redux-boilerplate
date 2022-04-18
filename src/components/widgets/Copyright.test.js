import * as React from "react";
import { render } from "@testing-library/react";

import Copyright from "./Copyright";

describe(`header`, () => {
  it(`renders siteTitle`, () => {
    expect.assertions(1);

    const siteTitle = `Your Website`;
    const { getByText } = render(<Copyright siteTitle={siteTitle} />);

    expect(getByText(siteTitle)).toBeInTheDocument();
  });
});
