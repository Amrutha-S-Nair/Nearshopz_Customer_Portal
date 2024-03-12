import { expect } from '@playwright/test';
import { setDefaultTimeout } from '@cucumber/cucumber';

/** 
  Description   : Customer Portal
  Functionality : Yet to Provide
  Author        : QA Team
  Start Date    : 1st Feb - 2024
  Modified Date : 12th Feb - 2024
  Last Changes Done by : Amrutha S Nair
*/

export class HomePg {
  constructor() {
    /* Locators */
    //Footer Links
    global.TermsandConditionLink = global.page.locator(
      "//div[contains(text(),'Terms and Conditions')]",
    );
    global.AboutUsLink = global.locator("//div[contains(text(),'About Us')]");
    //this.PrivacyPoliyLink = page.locator("//div[contains(text(),'Privacy Policy')]");
    //this.ContactUsLink = page.locator("//div[contains(text(),'Contact Us')]");
  }

  //function for navigating to HomePage
  public navigateToHomePage = async () => {
    await global.page.goto(global.BASE_URL_PROD);
    setDefaultTimeout(parseInt(process.env.DEFAULT_TIMEOUT) || 60000);
    await global.page.waitForTimeout(10000);
  };

  /*This function will click on Terms and Condition button */
  public clickTermsandConditionLink = async () => {
    expect(await global.TermsandConditionLink.click());
    await global.page.waitForTimeout(5000);
  };

}
