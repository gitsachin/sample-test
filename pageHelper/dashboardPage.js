/**
 * Created by  on 07/10/15.
 */

var dashboardPage = function () {

    'use strict';
    var that = this;
    browser.ignoreSynchronization = true;

    beforeEach(function () {

    });

    this.dashboardTabPath = By.xpath("html/body/cf-credacious-navbar/nav/div/div[1]/a/img");


    this.verifyDashBoardPage = function () {

        browser.wait(function () {
            return browser.isElementPresent(By.xpath("html/body/cf-credacious-navbar/nav/div/div[1]/a/img"));
        }, 60000);

        browser.findElement(this.dashboardTabPath).then(function (foundElement) {
        expect(foundElement.isDisplayed()).toBeTruthy();
    });

    };
};

module.exports = dashboardPage;	//naming the page object