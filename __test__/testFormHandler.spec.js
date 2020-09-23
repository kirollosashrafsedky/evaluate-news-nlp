import { getkey } from "../src/client/js/formHandler"


test('test get json key', async () => {
  expect.assertions(1);
  const data = await getkey();
  expect(data).toBeTruthy();
});
