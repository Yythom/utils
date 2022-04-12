import { create_array } from "./array";
import { formatUrl, randomFrom, isMobile, debounce, } from "./format";
import logger from "./logger";
import linkUrl from "./navlink";
import NumberUtils from "./number";
import { startInterval, stopInterval, clearKeyTime, } from "./timer";

export default {
    create_array,
    NumberUtils,

    // time
    startInterval,
    stopInterval,
    clearKeyTime,

    // search url
    linkUrl,

    Storage,

    /// format 
    formatUrl,
    randomFrom,
    isMobile,
    debounce,

    logger,
}