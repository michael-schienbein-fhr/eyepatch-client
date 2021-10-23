import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { UserProvider, demoQueueVideo, demoSearchVideo } from "../../testUtils";
import CreateRoomForm from "./CreateRoomForm";

// const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";
// const nock = require('nock')



it("matches snapshot", function () {

  const { asFragment } = render(
    <UserProvider>
      <CreateRoomForm/>
    </UserProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
