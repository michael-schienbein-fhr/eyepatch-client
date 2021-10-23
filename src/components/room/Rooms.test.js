import React from "react";
import { render } from "@testing-library/react";
import Rooms from "./Rooms";
import { UserProvider, testRoom } from "../../testUtils";
import { MemoryRouter, Route } from "react-router";

it("matches snapshot ", function () {

  const { asFragment } = render(
    <MemoryRouter >
      <UserProvider>
        <Route>
          <Rooms />
        </Route>
      </UserProvider>
    </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});