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
.then(showText)
.then(function () {
    return driver.findElement(By.css('#child-not-displayed')).getText()
})
.then(showText)
.then(function () {
    return driver.findElement(By.css('#article-display-none')).getText()
})
.then(showText)
.then(function () {
    return driver.findElement(By.css('#article-visibility-hidden')).getText()
})
.then(showText)
.then(function () {
    return driver.findElement(By.css('#article-offscreen')).getText()
})
.then(showText)
.then(function () {
    return getTextIfDisplayed(By.css('#article-offscreen'))
})
.then(showText)
.then(quit, quit)

function getTextIfDisplayed(locator) {
    return driver.findElement(locator).then(function (element) {
        return element.isDisplayed().then(function (isDisplayed) {
            return isDisplayed ? element.getText() : null
        })
    })
}

function showText(text) {
	console.log(JSON.stringify(text))
}

function quit() {
	driver.quit()
}
