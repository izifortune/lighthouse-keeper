import { map, pipe, divide, __ } from 'ramda'

import {
  totalByteWeightJS,
  totalByteWeightCSS,
  totalByteWeightXHR,
  totalByteWeightIMG,
  totalByteWeightFONT,
  totalByteWeightDocument,
  totalByteWeightValue,
} from './mapping-bytes'
import { minList, off } from './utils'

const toKb = divide(__, 1000)
const budget = pipe(
  minList,
  off,
  n => n.toFixed(2),
  parseFloat
)

export const dataBytes = reports => {
  const listBytes = map(
    pipe(
      totalByteWeightValue,
      toKb
    ),
    reports
  )
  const listTotalDocument = map(
    pipe(
      totalByteWeightDocument,
      toKb
    ),
    reports
  )
  const listTotalJS = map(
    pipe(
      totalByteWeightJS,
      toKb
    ),
    reports
  )
  const listTotalCSS = map(
    pipe(
      totalByteWeightCSS,
      toKb
    ),
    reports
  )
  const listTotalIMG = map(
    pipe(
      totalByteWeightIMG,
      toKb
    ),
    reports
  )
  const listTotalFONT = map(
    pipe(
      totalByteWeightFONT,
      toKb
    ),
    reports
  )
  const listTotalXHR = map(
    pipe(
      totalByteWeightXHR,
      toKb
    ),
    reports
  )

  const budgetBytes = budget(listBytes)
  const budgetJS = budget(listTotalJS)
  const budgetCSS = budget(listTotalCSS)
  const budgetIMG = budget(listTotalIMG)
  const budgetFont = budget(listTotalFONT)
  const budgetXHR = budget(listTotalXHR)
  const budgetDocument = budget(listTotalDocument)

  return [
    [`Total Size\n ${budgetBytes}`, ...listBytes, budgetBytes],
    [`Total Document\n ${budgetDocument}`, ...listTotalDocument, budgetDocument],
    [`Total JS\n ${budgetJS}`, ...listTotalJS, budgetJS],
    [`Total CSS\n ${budgetCSS}`, ...listTotalCSS, budgetCSS],
    [`Total IMG\n ${budgetIMG}`, ...listTotalIMG, budgetIMG],
    [`Total Font\n ${budgetFont}`, ...listTotalFONT, budgetFont],
    [`Total XHR\n ${budgetXHR}`, ...listTotalXHR, budgetXHR],
  ]
}

// export const budgetBytes = ({
//   size: pipe(
//         map(totalByteWeightValue),
//         minList,
//         off
//     ),
//   js: pipe(
//         map(totalByteWeightJS),
//         minList,
//         off
//     ),
//   css: pipe(
//         map(totalByteWeightCSS),
//         minList,
//         off
//     ),
//   img: pipe(
//         map(totalByteWeightIMG),
//         minList,
//         off
//     ),
//   font: pipe(
//         map(totalByteWeightFONT),
//         minList,
//         off
//     ),
//   json: pipe(
//         map(totalByteWeightJSON),
//         minList,
//         off
//     ),
// });
