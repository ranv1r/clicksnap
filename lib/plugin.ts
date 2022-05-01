import BasePlugin from "@appium/base-plugin";
import {existsSync, mkdirSync, writeFileSync} from "fs";
import log from "./logger";

class ClickSnap extends BasePlugin {
    commands = ["click"]

    async click(next, driver, ...args) {
        let base64screenshot = await driver.getScreenshot();
        await next()
        // e.g. dir - '/tmp/clicksnap/d64f9a74-c1ac-44a8-97d5-cb1634aacfb0'
        let dir = `/tmp/clicksnap/${args[1]}`
        if (!existsSync(dir)) {
            mkdirSync(dir, {recursive: true});
        }
        // e.g. screenshotPath - '/tmp/clicksnap/d64f9a74-c1ac-44a8-97d5-cb1634aacfb0/1642021037914.png'
        let screenshotPath = `${dir}/${Date.now()}.png`;
        writeFileSync(screenshotPath, new Buffer(base64screenshot, 'base64'));
        log.info(`Saved pre-click screenshot to [${screenshotPath}]`)
    }
}

export default ClickSnap;
export {ClickSnap};
