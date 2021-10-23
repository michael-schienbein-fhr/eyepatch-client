import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route } from "react-router";
import { UserProvider, demoQueueVideo, demoSearchVideo } from "../../testUtils";
import Room from "./Room";
import EyepatchApi from "../../api/api";
// const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";
// const nock = require('nock')

// EyepatchApi.getRoom(1) = jest.fn().mockImplementation(() => Promise.resolve(testRoom));

it("matches snapshot ", function () {

  const { asFragment } = render(
    <MemoryRouter initialEntries={[`/rooms/1`]}>
      <UserProvider>
        <Route path='rooms/:blogId'>
          <Room />
        </Route>
      </UserProvider>
    </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});