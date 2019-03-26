import { map, pipe } from 'ramda'

import {
  firstMeaningfulPaint,
  firstCpuIdle,
  firstContentfulPaint,
  bootupTime,
  timeToFirstByte,
} from './mapping-timings'
import { minList, off } from './utils'

const budget = pipe(
  minList,
  off,
  n => n.toFixed(2),
  parseFloat
)

export const dataTimings = reports => {
  const listFirstMeaningfulPaint = map(firstMeaningfulPaint, reports)
  const listFirstContentfulPaint = map(firstContentfulPaint, reports)
  const listCpuIdle = map(firstCpuIdle, reports)
  const listTimeToFirstByte = map(timeToFirstByte, reports)
  const listJsParseCompile = map(bootupTime, reports)

  const budgetFirstMeaningfulPaint = budget(listFirstMeaningfulPaint)
  const budgetFirstContentfulPaint = budget(listFirstContentfulPaint)
  const budgetCpuIdle = budget(listCpuIdle)
  const budgetTimeToFirstByte = budget(listTimeToFirstByte)
  const budgetJsParseCompile = budget(listJsParseCompile)

  return [
    [
      `First MeaningfulPaint\n ${budgetFirstMeaningfulPaint}`,
      ...listFirstMeaningfulPaint,
      budgetFirstMeaningfulPaint,
    ],
    [
      `First Contentful Paint\n ${budgetFirstContentfulPaint}`,
      ...listFirstContentfulPaint,
      budgetFirstContentfulPaint,
    ],
    [
      `CpuIdle\n ${budgetCpuIdle}`,
      ...listCpuIdle,
      budgetCpuIdle,
    ],
    [
      `Time to first byte\n ${budgetTimeToFirstByte}`,
      ...listTimeToFirstByte,
      budgetTimeToFirstByte,
    ],
    [
      `Bootup Time\n ${budgetJsParseCompile}`,
      ...listJsParseCompile,
      budgetJsParseCompile,
    ],
  ]
}

// export const budgetTimings = ({
//   meaningfulPaint: pipe(
//         map(firstMeaningfulPaint),
//         minList,
//         off
//     ),
//   firstVisualChange: pipe(
//         map(firstVisualChange),
//         minList,
//         off
//     ),
//   firstContentfulPaint: pipe(
//         map(firstContentfulPaint),
//         minList,
//         off
//     ),
//   firstCpuIdle: pipe(
//         map(firstCpuIdle),
//         minList,
//         off
//     ),
//   timeToFirstByte: pipe(
//         map(timeToFirstByte),
//         minList,
//         off
//     ),
//   parse: pipe(
//         map(jsParseCompile),
//         minList,
//         off
//     ),
// });
