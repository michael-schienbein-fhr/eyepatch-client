import React from "react";
import { render } from "@testing-library/react";
import LoadingSpinner from "./LoadingSpinner";

it("matches snapshot", function () {
  const { asFragment } = render(<LoadingSpinner />);
  expect(asFragment()).toMatchSnapshot();
});
