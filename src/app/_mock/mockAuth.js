import { LOGIN_URL, REGISTER_URL } from "../crud/auth.crud";
import userTableMock from "./userTableMock";

export default function mockAuth(mock) {
  mock.onPost(LOGIN_URL).reply(({ data }) => {
    const { email, password } = JSON.parse(data);

    if (email && password) {
      const user = userTableMock.find(
        (x) =>
          x.email.toLowerCase() === email.toLowerCase() &&
          x.password === password
      );

      if (user) {
        return [
          200,
          { authToken: "access-token-8f3ae836da744329a6f93bf20594b5cc", user },
        ];
      }
    }

    return [400];
  });
  mock.onPost(REGISTER_URL).reply(({ data }) => {
    const newUser = JSON.parse(data);

    if (newUser) {
      const exists = userTableMock.find(
        (x) => x.email.toLowerCase() === newUser.email.toLowerCase()
      );
      if (exists) {
        return [200, { message: "User Already Exists" }];
      }
      const user = {
        id: userTableMock.length,
        ...newUser,
      };

      userTableMock.push(user);

      return [200, { user: { ...user, password: undefined } }];
    }

    return [400];
  });
}
