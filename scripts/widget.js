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
    "symbol": "TVC:DXY",
    "container_id": "widget-area-01"
  }
);
new TradingView.widget(
  {
    ...widgetConfig,
    "symbol": "AMEX:DIA",
    "container_id": "widget-area-02"
  }
);
new TradingView.widget(
  {
    ...widgetConfig,
    "symbol": "TVC:GOLD",
    "container_id": "widget-area-03"
  }
);
new TradingView.widget(
  {
    ...widgetConfig,
    "symbol": "NYMEX:CL1!",
    "container_id": "widget-area-04"
  }
);
new TradingView.widget(
  {
    ...widgetConfig,
    "symbol": "CRYPTO:BTCUSD",
    "container_id": "widget-area-05"
  }
);
new TradingView.widget(
  {
    ...widgetConfig,
    "symbol": "NASDAQ:QQQ",
    "container_id": "widget-area-06"
  }
);
new TradingView.widget(
  {
    ...widgetConfig,
    "symbol": "AMEX:SPY",
    "container_id": "widget-area-07"
  }
);
new TradingView.widget(
  {
    ...widgetConfig,
    "symbol": "AMEX:IWM",
    "container_id": "widget-area-08"
  }
);