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
    return driver.findElement(By.css('#child-not-displayed')).getText()
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
    return driver.findElement(By.css('#article-offscreen')).getText()
})
.then(function (text) {
    console.log(JSON.stringify(text))
})
.then(function () {
    return getTextIfDisplayed(By.css('#article-offscreen'))
})
.then(function (text) {
    console.log(JSON.stringify(text))
})

function getTextIfDisplayed(locator) {
    return driver.findElement(locator).then(function (element) {
        return element.isDisplayed().then(function (isDisplayed) {
            return isDisplayed ? element.getText() : null
        })
    })
}
