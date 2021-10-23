import { render} from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { UserProvider} from "../../testUtils";
import Player from "./Player";

// const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";
// const nock = require('nock')



it("matches snapshot", function () {

  const { asFragment } = render(
    <UserProvider>
      <Player
        globalQueue={{testvideo: "testVideo", testvideoId: "testvideoId"}}
      />
    </UserProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
