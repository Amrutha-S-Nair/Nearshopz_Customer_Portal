import playwright from 'playwright';
import { BeforeAll, Before, After, Status } from '@cucumber/cucumber';
//import { chromium } from 'playwright/test';

BeforeAll(async () => {
  console.log(
    'before all ...',
  ); /* This is used to monitor on cosole for local machine*/
  // global.browser = await playwright['chromium'].launch({ headless: false,
  //     args:['--window-size=1920,1040']});
  global.browser = await playwright['chromium'].launch({
    headless: false,
    args: ['--start-maximized', '--no-incognito'],
  });
  //global.browser = await chromium.launch({ headless: false});
});

/*This code will be reuse for later progress */
/*AfterAll(async () => {
    console.log('after all ...');
    await global.browser.close();
});*/

Before(async () => {
  console.log(
    'before ...',
  ); /* This is used to monitor on cosole for local machine*/
  // global.context = await global.browser.newContext();
  // global.page = await global.context.newPage();
  global.context = await global.browser.newContext({ viewport: null });
  global.page = await global.context.newPage();
});
After(async () => {
  console.log(
    'after pass...',
  ); /* This is used to monitor on cosole for local machine*/
  //await global.page.close();
  //await global.context.close();
});
After(async function (scenario) {
  if (scenario.result.status === Status.FAILED) {
    const buffer = await global.page.screenshot({
      path: `reports/${scenario.pickle.name}.png`,
      fullPage: true,
    });
    this.attach(buffer, 'image/png');
  }
});
