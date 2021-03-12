import MockAdapter from "axios-mock-adapter";
import mockAuth from "./mockAuth";

export default function mockAxios(axios) {
  console.log("mpcking")
  const mock = new MockAdapter(axios);

  mockAuth(mock);
  //mock.restore();
  return mock;
}
