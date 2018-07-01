import dataUrl from './data-url'
import dataScore from './data-score'
import { addDownloadImage, show, resizeChart } from './utils'

export default function drawChartScore(idSelector, reports) {
  // Create the data table.
  const data = window.google.visualization.arrayToDataTable([
    [...dataUrl(reports), 'Budget'],
    ...dataScore(reports),
  ])

  // Set chart options
  const options = {
    legend: { position: 'top', maxLines: 1 },
    bar: { groupWidth: '75%' },
    seriesType: 'bars',
    series: { [reports.length]: { type: 'line' } },
    animation: { startup: true },
  }

  show('.score')
  // Instantiate and draw our chart, passing in some options.
  const chart = new window.google.visualization.ComboChart(
    document.getElementById(idSelector)
  )

  addDownloadImage(chart, 'score__download')

  chart.draw(data, options)

  resizeChart(chart, data, options)
}
