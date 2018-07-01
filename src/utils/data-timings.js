import { map, pipe } from 'ramda'

import {
  firstMeaningfulPaint,
  firstInteractive,
  visuallyComplete,
  firstVisualChange,
  jsParseCompile,
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
  const listFirstVisualChange = map(firstVisualChange, reports)
  const listFirstInteractive = map(firstInteractive, reports)
  const listVisuallyComplete = map(visuallyComplete, reports)
  const listTimeToFirstByte = map(timeToFirstByte, reports)
  const listJsParseCompile = map(jsParseCompile, reports)

  const budgetFirstMeaningfulPaint = budget(listFirstMeaningfulPaint)
  const budgetFirstVisualChange = budget(listFirstVisualChange)
  const budgetFirstInteractive = budget(listFirstInteractive)
  const budgetVisuallyComplete = budget(listVisuallyComplete)
  const budgetTimeToFirstByte = budget(listTimeToFirstByte)
  const budgetJsParseCompile = budget(listJsParseCompile)

  return [
    [
      `First MeaningfulPaint\n ${budgetFirstMeaningfulPaint}`,
      ...listFirstMeaningfulPaint,
      budgetFirstMeaningfulPaint,
    ],
    [
      `First Visual Change\n ${budgetFirstVisualChange}`,
      ...listFirstVisualChange,
      budgetFirstVisualChange,
    ],
    [
      `First Interactive\n ${budgetFirstInteractive}`,
      ...listFirstInteractive,
      budgetFirstInteractive,
    ],
    [
      `Visually Complete\n ${budgetVisuallyComplete}`,
      ...listVisuallyComplete,
      budgetVisuallyComplete,
    ],
    [
      `Time to first byte\n ${budgetTimeToFirstByte}`,
      ...listTimeToFirstByte,
      budgetTimeToFirstByte,
    ],
    [
      `JS Parse & Compile\n ${budgetJsParseCompile}`,
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
//   firstInteractive: pipe(
//         map(firstInteractive),
//         minList,
//         off
//     ),
//   visuallyComplete: pipe(
//         map(visuallyComplete),
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
