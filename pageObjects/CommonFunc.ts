//import { expect } from '@playwright/test';
//import { NumberLiteralType } from 'typescript';

/** 
  Description   : Customer Portal
  Functionality : Yet to Provide
  Author        : QA Team
  Start Date    : 1st Feb - 2024
  Modified Date : 12th Feb - 2024
  Last Changes Done by : Amrutha S Nair
*/

export class CommonFunc {
  constructor() {
    /* Locators */
    global.cnctWalletWindowTxt = global.page.locator(
      "//h3[contains(text(),'Connect')]",
    );
  }

}
