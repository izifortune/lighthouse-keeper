import dataUrl from './data-url'
import { dataTimings } from './data-timings'
import { suffixFormatter } from './formatters'
import { addDownloadImage, show, resizeChart } from './utils'

export default function drawChartTimings(idSelector, reports) {
  // Create the data table.
  const data = window.google.visualization.arrayToDataTable([
    [...dataUrl(reports), 'Budget'],
    ...dataTimings(reports),
  ])

  // Set chart options
  const options = {
    legend: { position: 'top', maxLines: 1 },
    bar: { groupWidth: '75%' },
    seriesType: 'bars',
    series: { [reports.length]: { type: 'line' } },
  }

  show('.timings')
  // Instantiate and draw our chart, passing in some options.
  const chart = new window.google.visualization.ComboChart(
    document.getElementById(idSelector)
  )
  const formatter = new suffixFormatter(' ms')
  reports.forEach((el, index) => {
    formatter.format(data, index + 1)
  })
  formatter.format(data, reports.length + 1)

  addDownloadImage(chart, 'timings__download')

  chart.draw(data, options)

  resizeChart(chart, data, options)
}
