// Instantiate scheduler variables
let currentSchedule = "schedule1"
let currentSet = "set1"

// Chart widget configuration
const widget = {
  schedule1: {
    // TODO: Change to objects with symbol, interval & timezone
    //        See config.js for example
    set1: [
      "CRYPTO:XRPUSD",
      "CRYPTO:BTCUSD",
      "CRYPTO:SOLUSD",
      "CRYPTO:ADAUSD",
      "CRYPTO:ETHUSD",
      "CRYPTO:DOTUSD",
      "CRYPTO:PEPEUSD", 
      "POLONIEX:BIGUSDT"
    ],
    set2: [
      "CRYPTO:YFIUSD",
      "CRYPTO:XMRUSD",
      "CRYPTO:MKRUSD",
      "CRYPTO:ALGOUSD",
      "CRYPTO:ARRRUSD",
      "CRYPTO:HBARUSD",
      "CRYPTO:XLMUSD",
      "CRYPTO:RNDRUSD"
    ],
    set3: [
      "CAPITALCOM:DXY",
      "BLACKBULL:US30",
      "CAPITALCOM:GOLD",
      "NYMEX:CL1!",
      "NASDAQ:NDX",
      "BITSTAMP:BTCUSD",
      "AMEX:SPY",
      "AMEX:IWM"
    ],
    set4: [
      "AMEX:UUP",
      "AMEX:DIA",
      "TVC:SILVER",
      "CAPITALCOM:NATURALGAS",
      "NASDAQ:QQQ",
      "BITSTAMP:ETHUSD",
      "AMEX:SPY",
      "AMEX:IWM"
    ]
  }
}

// Instantiate chart widget key index
const setKeys = Object.keys(widget[currentSchedule]);

const getTickerPrice = async (ticker) => {
  // TODO: Get this working :)
  ticker = ticker.split(":")
  ticker = ticker[1]
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
    // console.log(currentSet, ticker, res);
  })
} 

const widgetConfig = {
  "autosize": true,
  "interval": "15",
  "timezone": "America/New_York",
  "theme": "dark",
  "style": "1",
  "locale": "en",
  "toolbar_bg": "#f1f3f6",
  "enable_publishing": false,
  "hide_top_toolbar": true,
  "hide_legend": true,
  "allow_symbol_change": true,
  "save_image": false,
  "backgroundColor": "rgba(0, 0, 0, 1)",
}

const setWidget = (currentSet) => {
  // Consolidate into loop
  new TradingView.widget(
    {
      ...widgetConfig,
      "symbol": widget[currentSchedule][currentSet][0],
      "container_id": "widget-area-01"
    }
  );
  new TradingView.widget(
    {
      ...widgetConfig,
      "symbol": widget[currentSchedule][currentSet][1],
      "container_id": "widget-area-02"
    }
  );
  new TradingView.widget(
    {
      ...widgetConfig,
      "symbol": widget[currentSchedule][currentSet][2],
      "container_id": "widget-area-03"
    }
  );
  new TradingView.widget(
    {
      ...widgetConfig,
      "symbol": widget[currentSchedule][currentSet][3],
      "container_id": "widget-area-04"
    }
  );
  new TradingView.widget(
    {
      ...widgetConfig,
      "symbol": widget[currentSchedule][currentSet][4],
      "container_id": "widget-area-05"
    }
  );
  new TradingView.widget(
    {
      ...widgetConfig,
      "symbol": widget[currentSchedule][currentSet][5],
      "container_id": "widget-area-06"
    }
  );
  new TradingView.widget(
    {
      ...widgetConfig,
      "symbol": widget[currentSchedule][currentSet][6],
      "container_id": "widget-area-07"
    }
  );
  new TradingView.widget(
    {
      ...widgetConfig,
      "symbol": widget[currentSchedule][currentSet][7],
      "container_id": "widget-area-08"
    }
  );
}

const setTicker = (currentSet) => {
  widget[currentSchedule][currentSet].forEach((ticker, index) => {
    const price = getTickerPrice(ticker)
    document.getElementById(`ticker-area-0${index + 1}`).innerHTML = `<marquee direction="left" width="100%" Scrollamount="4">${ticker}</marquee>`
  });
}