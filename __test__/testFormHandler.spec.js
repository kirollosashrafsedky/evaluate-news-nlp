import { getData } from "../src/client/js/formHandler"


test('test get data', async () => {
  const data = await getData();
  expect(data).toBeTruthy();
});
