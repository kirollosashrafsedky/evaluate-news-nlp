import { getData } from "../src/client/js/getData"

// this should give error msg bec, it's not the api url
test('test get json data', async () => {
  expect.assertions(1);
  const data = await getData('http://localhost:8081');
  expect(data).toEqual('error');
});
