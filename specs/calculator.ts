
import { browser } from "protractor"
import { Homepage } from '../pages/HomePage';


describe('calucltor test', function () {
    browser.ignoreSynchronization = true;

    it('calcfunctionality', async () => {
        
        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login").then(function () {
            browser.getTitle().then(async (text)=> {
                console.log(text);
                let page=new Homepage
               page.customerLoginButton();
               browser.sleep(4000)
               page.customerselection();
               browser.sleep(4000);
               page.listofcustomrs();
               browser.sleep(4000);
               page.custlist();
               browser.sleep(4000)
            });
            browser.sleep(4000)

        });
        browser.sleep(4000)

    })

})