import { suffixFormatter } from './formatters'
import dataUrl from './data-url'
import { dataBytes } from './data-bytes'
import { addDownloadImage, show, resizeChart } from './utils'

export default function drawChartBytes(idSelector, reports) {
  // Create the data table.
  const data = window.google.visualization.arrayToDataTable([
    [...dataUrl(reports), 'Budget'],
    ...dataBytes(reports),
  ])

  // Set chart options
  const options = {
    legend: { position: 'top', maxLines: 1 },
    bar: { groupWidth: '75%' },
    seriesType: 'bars',
    series: { [reports.length]: { type: 'line' } },
  }

  const formatter = suffixFormatter(' KB')
  reports.forEach((el, index) => {
    formatter.format(data, index + 1)
  })
  formatter.format(data, reports.length + 1)
  // Instantiate and draw our chart, passing in some options.

  show('.bytes')

  const chart = new window.google.visualization.ComboChart(
    document.getElementById(idSelector)
  )

  addDownloadImage(chart, 'bytes__download')

  chart.draw(data, options)

  resizeChart(chart, data, options)
}
