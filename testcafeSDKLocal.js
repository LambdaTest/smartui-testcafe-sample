import { Selector } from 'testcafe';
import { smartuiSnapshot } from '@lambdatest/testcafe-driver';

fixture('Amazon Test')
  .page('https://www.amazon.com');

test('Take Amazon Homepage Screenshot', async (t) => {
  // Take a screenshot using LambdaTest's TestCafe driver
  await smartuiSnapshot(t, 'Amazon Homepage');
});
