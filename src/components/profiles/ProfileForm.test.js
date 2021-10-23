import { render, cleanup, findByLabelText } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { UserProvider, demoUser } from "../../testUtils";
import Profile from "./ProfileForm";

// const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";
// const nock = require('nock')



it("matches snapshot", function () {

  const { asFragment } = render(
    <UserProvider>
      <Profile />
    </UserProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});

