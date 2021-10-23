import React from "react";
import { render } from "@testing-library/react";
import RoomCard from "./RoomCard";
import { UserProvider, testRoom } from "../../testUtils";
import { MemoryRouter, Route } from "react-router";

it("matches snapshot ", function () {

  const { asFragment } = render(
    <MemoryRouter >
      <UserProvider>
        <Route>
          <RoomCard />
        </Route>
      </UserProvider>
    </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});