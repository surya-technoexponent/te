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

  if (RSSBGIndex === RSSBgs.length - 1) {
    RSSBGIndex = 0
  } else {
    RSSBGIndex = RSSBGIndex + 1
  }
  const rssCont = document.getElementById("left-marquee")
  setInterval(() => {
    rssCont.style.background = `url(${RSSBgs[RSSBGIndex]})`
    // rssCont.classList.add("animate-fade")
  }, 1000 * 30)

});
