var selenium = require('selenium-webdriver');
var By = selenium.By;

var driver = new selenium.Builder()
    .usingServer()
    .withCapabilities({'browserName': 'chrome' })
    .build();

driver.get('http://xgbuils.github.io/date-test/').then(function () {
    return driver.findElement(By.css('#article1')).getText()
})
.then(function (text) {
    console.log(JSON.stringify(text))
})
