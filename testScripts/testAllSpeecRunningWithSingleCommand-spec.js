
'use strict';

var loginPage  = require('../pageHelper/loginpage.js'), logingpage = new loginPage();
var dashboardPage  = require('../pageHelper/dashboardPage.js'), dashboardpage = new dashboardPage();
var loginPageNegative = require('../pageHelper/loginPageNegative.js'), logingpagenegative = new loginPageNegative();
beforeEach(function() {
  browser.ignoreSynchronization = true;
  browser.get("https://dev.credacious.com");
});

afterEach(function() {
    browser.executeScript('window.sessionStorage.clear();');
    browser.executeScript('window.localStorage.clear();');
});

describe('portal revsw Login', function() {

	it('login into the application', function() {

        /*logingpage.setuserNameInputElement("testsids3@gmail.com");
        logingpage.setuserPasswordInputElement("testing12");
        logingpage.clickOnLogibButton();*/
        //dashboardpage.verifyDashBoardPage();
        logingpagenegative.setuserNameInputElement("testsids3@gmail.com");
        logingpagenegative.clickOnLoginButton();
        browser.sleep(5000);
   });

    it('test browser session cleared before it', function() {

        /*logingpage.setuserNameInputElement("testsids3@gmail.com");
        logingpage.setuserPasswordInputElement("testing12");
        logingpage.clickOnLogibButton();*/
        //dashboardpage.verifyDashBoardPage();
        logingpagenegative.setuserNameInputElement("testsids3@gmail.com");
        logingpagenegative.clickOnLoginButton();
        browser.sleep(5000);
    });

    it('test failed test case', function() {

        /*logingpage.setuserNameInputElement("testsids3@gmail.com");
        logingpage.setuserPasswordInputElement("testing12");
        logingpage.clickOnLogibButton();*/
        dashboardpage.verifyDashBoardPage();
        logingpagenegative.setuserNameInputElement("testsids3@gmail.com");
        logingpagenegative.clickOnLoginButton();
        browser.sleep(5000);
    });


});