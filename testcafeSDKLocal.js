import { Selector } from 'testcafe';
import { smartuiSnapshot } from '@lambdatest/testcafe-driver';

fixture('LambdaTest Test')
  .page('https://www.lambdatest.com');

test('Take Homepage Screenshot', async (t) => {
  // Take a screenshot using LambdaTest's TestCafe driver
  await smartuiSnapshot(t, 'screenshot');
});
