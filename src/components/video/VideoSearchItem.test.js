import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { UserProvider, demoQueueVideo, demoSearchVideo } from "../../testUtils";
import VideoQueueItem from "./VideoQueueItem";

// const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";
// const nock = require('nock')



it("matches snapshot", function () {
  window.HTMLElement.prototype.scrollIntoView = function () { };
  const { asFragment } = render(
    <UserProvider>
      <VideoQueueItem
        video={demoSearchVideo}
      />
    </UserProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
