// Load initial chart set & instantiate chart changing loop
// TODO:
//    * Separate functions
//      - On page load, load the first 8
//        - initializeTickers(charts)
//        - initializeWidgets(charts)
//      - Every 1 minute, change 1 chart, in order
//        - changeTicker(index)
//        - changeWidget(index)
window.addEventListener("load", () => {

  // Initialize charts & banners
  charts.initializeCharts();

  // Global window timer
  handleNextChart = setInterval(() => {
    charts.nextChart();
  }, 1000 * 60 * config.charts.changeInterval);

});
