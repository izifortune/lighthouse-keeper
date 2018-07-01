// import dataScore from './data-score';
// import dataTimings from './data-timings';
// import dataBytes from './data-bytes';
// import dataUrl from './data-url';
//
// export default function drawChart(type, idSelector, reports) {
//   let metrics;
//   switch (type) {
//     case 'score':
//       metrics = dataScore(reports);
//       break;
//     case 'timings':
//       metrics = dataTimings(reports);
//       break;
//     case 'bytes':
//       metrics = dataBytes(reports);
//       break;
//     default:
//       metrics = [];
//   }
//     // Create the data table.
//   const data = google.visualization.arrayToDataTable([
//     dataUrl(reports),
//     ...metrics
//   ]);
//
//     // Set chart options
//   const options = {
//     width: 800,
//     height: 600,
//     legend: {position: 'top', maxLines: 3},
//     bar: {groupWidth: '75%'},
//     isStacked: true,
//   };
//
//     // Instantiate and draw our chart, passing in some options.
//   const chart = new google.charts.Bar(document.getElementById(idSelector));
//   chart.draw(data, options);
// }
