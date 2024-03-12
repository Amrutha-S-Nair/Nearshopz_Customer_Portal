import { Given, setDefaultTimeout } from '@cucumber/cucumber';
import { HomePg } from '../pageObjects/HomePage';

setDefaultTimeout(60 * 1000);

/** 
  Description   : Customer Portal
  Functionality : Yet to Provide
  Author        : QA Team
  Start Date    : 1st Feb - 2024
  Modified Date : 12th Feb - 2024
  Last Changes Done by : Amrutha S Nair
*/

let page;

// Func for navigating to the Homepage screen
Given('I am on the home screen', async function () {
  this.page = page;
  const homePage = new HomePg();
  await homePage.navigateToHomePage();
});

// // Func for clicking the connect wallet button from Homepage
// Then('I click on Connect wallet button', async function () {
//   this.page = page;
//   const homePage = new HomePg();
//   await homePage.clickConnectWalletButton();
// });
