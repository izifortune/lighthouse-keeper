import { map, pipe } from 'ramda'

import { reportAuditRawValue } from './mapping-timings'
import { minList, off } from './utils'

const budgetMin = pipe(
  minList,
  off,
  n => n.toFixed(2),
  parseFloat
)

export const dataTimings = reports => {
  const timingsData = ([auditName, title]) => {
    const values = map(reportAuditRawValue(auditName), reports)
    const budget = budgetMin(values)
    return [`${title}\n ${budget}`, ...values, budget]
  }
  
  return map(timingsData, [
    ['first-meaningful-paint', 'First Meaningful Paint'],
    ['first-contentful-paint', 'First Contentful Paint'],
    ['first-cpu-idle', 'CpuIdle'],
    ['time-to-first-byte', 'Time to first byte'],
    ['bootup-time', 'Bootup Time']
  ]);
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
