import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { UserProvider, demoQueueVideo, demoSearchVideo } from "../../testUtils";
import VideoList from "./VideoList";

// const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";
// const nock = require('nock')



it("matches snapshot", function () {
  window.HTMLElement.prototype.scrollIntoView = function () { };
  const { asFragment } = render(
    <UserProvider>
      <VideoList
        globalQueue={[demoQueueVideo]}
        videoSearchRes={[demoSearchVideo]}
      />
    </UserProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
