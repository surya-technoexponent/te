/**
 * @fileoverview TradingView Chart & Ticker interface
 * 
 * @version 1.0.0
 * 
 * @requires config.js
 * 
 * @todo
 * 
 * @changelog 
 * 
 */

const charts = {

    /**
     * Function to format interval for display
     * 
     * @param {number} interval
     * 
     * @returns {string}
     * 
     * @example
     * 
     * formatInterval(1); // 1M
     * 
     */
    formatInterval: function (interval) {
        if (!isNaN(interval)) {
            interval = interval + 'M';
        }
        return interval;
    }, // End formatInterval

    /**
     * Function to format timezone for display
     * 
     * @param {string} timezone
     * 
     * @returns {string}
     * 
     * @example
     * 
     * formatTimezone('America/New_York'); // EST
     * 
     */
    formatTimezone: function (timezone) {
        // Strip prefix and / from timezone string
        if ("Etc/UTC" == timezone) {
            timezone = "UTC";
        } else if ("America/New_York" == timezone) {
            timezone = "EST";
        }
        return timezone;
    }, // End formatTimezone

    /**
     * Function to get a symbol's price
     * 
     * @param {*} ticker 
     * 
     * @returns {number}
     * 
     * @example
     * 
     * getSymbolPrice('AAPL'); // 123.45
     * 
     * @todo
     * 
     *  Get it working! :p
     * 
     * @changelog
     * 
     */
    getQuote: async (ticker) => {
        try {
            ticker = ticker.split(":");
            ticker = ticker[1];
            const options = {
                method: 'GET',
                url: 'https://mboum-finance.p.rapidapi.com/qu/quote',
                params: {
                    symbol: ticker
                },
                headers: {
                    'X-RapidAPI-Key': '636772207emsha8d9c780abcfea1p13a485jsn48fb95fd1b68',
                    'X-RapidAPI-Host': 'mboum-finance.p.rapidapi.com'
                }
            };
            await fetch(options).then(res => {
                console.log( ticker, res);
                config.charts.symbols[currentSet][currentSetKey].quote = res; // Nice trick eh? :D
            });
        } catch (e) {
            console.log(e);
        }
    }, // End getQuote

    /**
     * Function to increment the animation index
     * 
     * @param {number} key 
     * 
     */
    incrementAnimationIndex: function (key) {
        const keyMin = 0;
        const keyMax = config.animations.methods.length -1;
        if (key === keyMax) {
            key = keyMin;
        } else {
            key++;
        }
        config.animations.index = key;
        return key;
    }, // End incrementAnimationIndex

    /**
     * Function to test incrementAnimationIndex function
     */
    test_incrementAnimationIndex: function () {
        const keyMin = 0;
        const keyMax = 20;
        let index = 0;
        while (index <= keyMax) {
            console.log (`index: ${index}`);
            index = this.incrementAnimationIndex(index);
        }
    }, // End test_incrementAnimationIndex

    /**
     * Function to increment the current set's active index key
     * 
     * @param {number} key 
     * 
     */
    incrementSetKey: function (key) {
        const currentSet = config.charts.currentSet; 
        const keyMin = 0;
        const keyMax = config.charts.symbols[currentSet].length - 1;
        if (key == keyMax) {
            key = keyMin;
        } else {
            key++;
        }
        config.charts.nextSetKey = key;
        return key;
    }, // End incrementSetKey

    /**
     * Function to test incrementSetKey function
     */
    test_incrementSetKey: function () {
        const currentSet = config.charts.currentSet;
        const keyMin = 0;
        const keyMax = 20;
        let nextSetKey = 0;
        while (nextSetKey <= keyMax) {
            console.log (`nextSetKey: ${nextSetKey}`);
            nextSetKey = this.incrementSetKey(nextSetKey);
        }
    }, // End test_incrementSetKey

    /**
     * Function to increment the location marker
     * 
     * @param {number} location 
     */
    incrementLocation: function (location) {
        let locationMin = 1;
        let locationMax = 8;
        if (location === locationMax) {
            location = locationMin;
        } else {
            location++;
        }
        config.charts.nextLocation = location;
        return location;
    }, // End incrementLocation

    /**
     * Function to test incrementLocation function
     *  
     * @returns {boolean}
     * 
     * @example
     * 
     * incrementLocation(1); // 2
     * 
     */
    test_incrementLocation: function () {
        let locationMin = 1;
        let locationMax = 20;
        let nextLocation = 1;
        while (nextLocation <= locationMax) {
            console.log (`nextLocation: ${nextLocation}`);
            nextLocation = this.incrementLocation(nextLocation);
        }
        return true;
    }, // End test_incrementLocation

    /**
     * Function to instantiate a full set of charts & tickers
     * 
     * @returns {boolean}
     * 
     */

    initializeCharts: function () {

        try {
            // Instantiate local variables
            // Hardcoding initialization values ensures proper functionality on first load
            let chartObj;
            let currentLocation = 1;
            let currentSet = config.charts.currentSet;
            let currentSetKey = 0;

            // For each location, set chart & ticker
            while (currentLocation <= config.theme.numLocations) {
                // Get chart object to be placed on canvas
                chartObj = config.charts.symbols[currentSet][currentSetKey];
                // Set chart & ticker
                this.setChart(currentLocation, chartObj);
                this.setTicker(currentLocation, chartObj);
                // Update current config
                config.charts.currentLocation = currentLocation;
                config.charts.currentSetKey = currentSetKey;
                // Increment key & location
                currentLocation++;
                currentSetKey++;
            }
            // Update next config
            config.charts.nextLocation = 1;
            config.charts.nextSetKey = 8;
            return true;
        } catch (e) {
            console.log (`Failed to initialize charts with error: ${e}`);
            return false;
        }        

    }, // End initializeCharts

    /** 
     * Function to change a single chart & its ticker
     * 
     * @returns {boolean}
     * 
     */
    nextChart: function () {
        api.log('--- Begin nextChart ---');
        try {
            // Instantiate local variables
            let animationIndex = config.animations.index;
            let currentSet = config.charts.currentSet;
            let nextLocation = config.charts.nextLocation;
            let nextSetKey = config.charts.nextSetKey;

            const target = document.getElementById(`widget-area-0${nextLocation}`);

            const widgetBoxes = document.getElementsByClassName("bwa_widget_box")

            if(config.widgetTransition.currrentIndex === config.widgetTransition.transitions.length - 1) {
                config.widgetTransition.currrentIndex = 0
            } else {
                config.widgetTransition.currrentIndex = config.widgetTransition.currrentIndex + 1
            }
            console.log('trans Index', config.widgetTransition.transitions[config.widgetTransition.currrentIndex], Array.from(widgetBoxes)[animationIndex].style.background);
            Array.from(widgetBoxes).forEach(box => {
                box.style.background = config.widgetTransition.transitions[config.widgetTransition.currrentIndex]
                box.style.backgroundPosition = "center"
                box.style.backgroundRepeat = "no-repeat"
                box.style.backgroundSize = "contain"
            })
            
            target.classList.add("hide-widget")
            setTimeout(() => {
                target.classList.remove("hide-widget");
                // Initiate animation
                animations[config.animations.index](target);
                this.incrementAnimationIndex(config.animations.index);
            }, 1000 * 2)
            let chartObject = config.charts.symbols[currentSet][nextSetKey];

            // Debug
            api.log(`target: ${JSON.stringify(target)}`);
            api.log(`animationIndex: ${JSON.stringify(animationIndex)}`);
            api.log(`currentSet: ${JSON.stringify(currentSet)}`);
            api.log(`nextLocation: ${JSON.stringify(nextLocation)}`);
            api.log(`nextSetKey: ${JSON.stringify(nextSetKey)}`);
            api.log(`chartObject: ${JSON.stringify(chartObject)}`);

            // Debug
            api.log(`animations.index: ${JSON.stringify(config.animations.index)}`);

            // Update chart & ticker
            this.setChart(nextLocation, chartObject);
            this.setTicker(nextLocation, chartObject);

            // Update current config
            config.charts.currentLocation = nextLocation;
            config.charts.currentSetKey = nextSetKey;

            // Increment key & location
            this.incrementLocation(nextLocation);
            this.incrementSetKey(nextSetKey);

            // Debug
            api.log('Values upon completion:');
            api.log(`nextLocation: ${JSON.stringify(nextLocation)}`);
            api.log(`nextSetKey: ${JSON.stringify(nextSetKey)}`);
            api.log('--- End nextChart ---');

        } catch (e) {
            console.log (`Failed to change chart with error: ${e}`);
            return false;
        }
    }, // End nextChart

    /**
     * Function to insert TradingView chart widget
     * 
     * @param {number} location Must be a valid widget location
     * @param {object} chartObject From config.charts.currentSet
     */
    setChart: function (location, chartObject) {
        if (!this.validateLocation(location)) return false;
        if (!this.validateChartObject(chartObject)) return false;

        try {
            new TradingView.widget(
                {
                    ...config.charts.defaultProps,
                    "symbol": chartObject.symbolTV,
                    "interval": chartObject.interval,
                    "timezone": chartObject.timezone,
                    "range": chartObject.range,
                    "container_id": "widget-area-0" + location
                }
            );
            return true;
        } catch (e) {
            console.log (`Failed to set chart at location ${nextLocation} with object: ${chartObject}`);
            return false;
        }
    }, // End setChart

    /**
     * Function to set chart ticker values
     * 
     * @param {number} location From config.charts.currentLocation
     * @param {object} chartObject From config.charts.symbols.set.currentSet
     */
    setTicker: function (location, chartObject) {
        if (!this.validateLocation(location)) return false;
        if (!this.validateChartObject(chartObject)) return false;

        try {
            // Instantiate local variables
            const interval = this.formatInterval(chartObject.interval);
            // const price = getSymbolPrice(chartObject.symbolAPI);
            const range = chartObject.range;
            const symbol = chartObject.symbolTV;
            const timezone = this.formatTimezone(chartObject.timezone);
            // const volume = getVolume(chartObject.symbolAPI);

            // Update specified template location with symbol metadata
            document
                .getElementById(`ticker-area-0${location}`)
                .innerHTML = `<marquee direction="left"
                        width="100%"
                        Scrollamount="4">
                        ${symbol} :
                        : Interval - ${interval} :
                        : Range - ${range} :
                        : TZ - ${timezone}
                    </marquee>`
        } catch (e) {
            console.log (`Failed to set ticker at location ${location} with object: ${JSON.stringify(chartObject, null, 2)}`);
            return false;
        }
    }, // End setTicker

    /**
     * Function to format interval for display
     * 
     * @param {number} nextSetKey 
     */
    updateNextSetKey: function (nextSetKey) {
        try {
            config.charts.nextSetKey = nextSetKey;
            return true;
        } catch (e) {
            console.log (`Failed to update nextSetKey with value ${nextSetKey} with error: ${e}`);
            return false;
        }
    }, // End updateNextSetKey

    /**
     * Function to update nextLocation
     * 
     * @param {number} location 
     */
    updateNextLocation: function (location) {
        try {
            config.charts.nextLocation = location;
            return true;
        } catch (e) {
            console.log (`Failed to update nextLocation with value ${location} with error: ${e}`);
            return false;
        }
    }, // End updateNextLocation

    /**
     * Function to validate chart object
     * 
     * @param {object} chartObject
     * 
     * @returns {boolean}
     * 
     */
    validateChartObject: function (chartObject) {
        // Validate chartObject is a valid chart object
        if (typeof chartObject !== 'object') {
            console.log (`Invalid chart object: ${chartObject}`);
            return false;
        }
        // Validate chartObject has a symbolTV property
        if (!chartObject.hasOwnProperty('symbolTV')) {
            console.log (`Invalid chart object: ${chartObject}`);
            return false;
        }
        // Validate chartObject has an interval property
        if (!chartObject.hasOwnProperty('interval')) {
            console.log (`Invalid chart object: ${chartObject}`);
            return false;
        }
        // Validate chartObject has a timezone property
        if (!chartObject.hasOwnProperty('timezone')) {
            console.log (`Invalid chart object: ${chartObject}`);
            return false;
        }
        // Validate chartObject has a range property
        if (!chartObject.hasOwnProperty('range')) {
            console.log (`Invalid chart object: ${chartObject}`);
            return false;
        }
        return true;
    }, // End validateChartObject

    /**
     * Function to validate location
     * 
     * @param {number} location
     * 
     * @returns {boolean}
     * 
     */
    validateLocation: function (location) {
        // Validate location is a valid widget location number (1-8)
        if (location < 1 || location > 8) {
            console.log (`Invalid widget location: ${location}`);
            return false;
        }
        return true;
    }, // End validateLocation

} // End charts