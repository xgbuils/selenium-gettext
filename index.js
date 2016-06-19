var selenium = require('selenium-webdriver');
var By = selenium.By;

var driver = new selenium.Builder()
    .usingServer()
    .withCapabilities({'browserName': 'chrome' })
    .build();

driver.get('https://xgbuils.github.io/selenium-gettext/')
.then(function () {
    return driver.findElement(By.css('#displayed-article')).getText()
})
.then(function (text) {
    console.log(JSON.stringify(text))
})
.then(function () {
    return driver.findElement(By.css('#article-display-none')).getText()
})
.then(function (text) {
    console.log(JSON.stringify(text))
})
.then(function () {
    return driver.findElement(By.css('#article-visibility-hidden')).getText()
})
.then(function (text) {
    console.log(JSON.stringify(text))
})
.then(function () {
    return driver.findElement(By.css('#article-off-screen')).getText()
})
.then(function (text) {
    console.log(JSON.stringify(text))
})
