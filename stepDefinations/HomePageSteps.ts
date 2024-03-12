import { Given, setDefaultTimeout } from '@cucumber/cucumber';
import { HomePg } from '../pageObjects/HomePage';

setDefaultTimeout(60 * 1000);

/** 
  Description   : Step Def file for the New Homepage
  Functionality : Step def for the Home Page feature file has been covered here
  Author        : Abhineeth
  Start Date    : Feb 22nd - 2024
  Modified Date : Feb 27th - 2024
  Last Changes Done by : Abhineeth
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
