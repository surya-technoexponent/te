let currentSchedule = "schedule1"
let currentSet = "set1"

const widget = {
  schedule1: {
    set1: ["CAPITALCOM:DXY", "BLACKBULL:US30", "CAPITALCOM:GOLD", "NYMEX:CL1!", "NASDAQ:NDX", "BITSTAMP:BTCUSD", "SP:SPX", "TVC:RUT"],
    set2: ["AMEX:UUP", "AMEX:DIA", "TVC:SILVER", "CAPITALCOM:NATURALGAS", "NASDAQ:QQQ", "BITSTAMP:ETHUSD", "AMEX:SPY", "AMEX:IWM"]
  }
}
const setKeys = Object.keys(widget[currentSchedule]);

const currentSetIndex = setKeys.indexOf(currentSet)

window.addEventListener("load", () => {
  setInterval(() => {
    if(currentSetIndex <= (setKeys.length - 1)) {
      currentSet = setKeys[0]
    } else {
      currentSet = setKeys[currentSetIndex  + 1]
    }
  }, setChangeInterval)
})

const widgetConfig = {
  "autosize": true,
    "interval": "1D",
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

const getTickerPrice = async (ticker) => {
  ticker = ticker.split(":")
  ticker = ticker[1]
   await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=7QL0X0IQV6ZPANZB`).then(res => {
    console.log(ticker, res);
  })
} 

widget[currentSchedule][currentSet].forEach((ticker, index) => {
  const price = getTickerPrice(ticker)
  document.getElementById(`ticker-area-0${index + 1}`).innerHTML = `${ticker} - `
});


