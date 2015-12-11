var loginPageNegative = function () {

    'use strict';
    var that = this;
    browser.ignoreSynchronization = true;

    beforeEach(function () {

    });

    this.userNameInputPath = By.name("uEmail");
    this.loginButtonPath = By.xpath("html/body/div[1]/div/cf-main-login-or-register/div[2]/div/div/div/span/cf-indigenous-login/div/div[3]/div[2]/form/div/div[4]/input");
    
    this.setuserNameInputElement = function (name) {

        browser.wait(function () {
            return browser.isElementPresent(By.name("uEmail"));
        }, 60000);


        browser.findElement(this.userNameInputPath).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys(name);
        });
    };
    
    this.clickOnLogibButton = function () {
        browser.findElement(this.loginButtonPath).then(function (foundElement) {
            foundElement.click();
        });
    };

};
module.exports = loginPageNegative;	//naming the page object
    