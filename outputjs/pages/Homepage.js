"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var Homepage = /** @class */ (function () {
    function Homepage() {
        this.listofcustomrs1 = protractor_1.element.all(protractor_1.by.tagName('option'));
    }
    Homepage.prototype.customerLoginButton = function () {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='center']//button)[1]")).click();
    };
    Homepage.prototype.customerselection = function () {
        return protractor_1.element(protractor_1.by.id("userSelect")).click();
    };
    Homepage.prototype.listofcustomrs = function () {
        var list = protractor_1.element.all(protractor_1.by.tagName('option')).getText().then(function (text) {
            console.log(text);
            console.log(text.length);
        });
    };
    // public  mainlogin()
    // {
    //     return element(by.xpath("//button[@type='submit']"));
    // }
    Homepage.prototype.custlist = function () {
        this.listofcustomrs1.then(function (items) {
            console.log(items.length);
            var _loop_1 = function (i) {
                items[i].getText().then(function (text) {
                    console.log(text);
                    items[i].click();
                });
            };
            for (var i = 0; i < items.length; i++) {
                _loop_1(i);
            }
        });
    };
    return Homepage;
}());
exports.Homepage = Homepage;
