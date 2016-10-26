module.exports = (function (settings) {

    var isWindows = process.platform === "win32" || process.platform === "win64";
    var isMac = isWindows == false;
    var isBuildServer = process.env.RUNNING_ENV === "server";

    settings.selenium.cli_args["webdriver.chrome.driver"] = "./node_modules/chromedriver/lib/chromedriver/chromedriver" + (isWindows ? ".exe": "");

    settings.test_settings.default.desiredCapabilities.chromeOptions["args"] = [ isBuildServer ? "--window-size=1920,1080" : "--start-maximized","--disable-extensions", "no-sandbox"];

    
    return settings;

})(require('./nightwatch.json'));