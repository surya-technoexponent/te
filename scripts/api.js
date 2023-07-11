/**
 * @fileoverview API calls for the application.
 * 
 * @version 1.0.0
 * 
 * @requires config.js
 * 
 */

const api = {
    /**
     * Function to get a configuration value or object.
     * 
     * @param {string} key
     * 
     * @returns {string|object}
     * 
     * @example
     * 
     * getConfig('charts', 'symbols', 'currentSet');
     * 
     */
    getConfig: (key) => {
        return config[key];
    }, // End getConfig

    /**
     * Logging facility
     * 
     * @param {string} message
     * 
     * @returns {void}
     * 
     * @example
     * 
     * log('Hello, world!');
     * 
     * @todo
     *  - Add support for logging levels
     *  - Add support for logging to a file
     *  - Add support for logging to a remote server
     *  - Convert to Winston
     *  
     */

    log: (message) => {
        if (config.debug) {
            console.log(message);
        }
    }, // End log

    /**
     * Function to set a configuration value or object.
     * 
     * @param {string} key
     * @param {string|object} value
     * 
     * @returns {string|object}
     * 
     * @example
     * 
     * setConfig('charts', 'symbols', 'currentSet', 'set1');
     * 
     */
    setConfig: (key, value) => {
        return config[key] = value;
    }, // End setConfig
}