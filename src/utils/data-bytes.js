import { map, pipe, divide, __ } from 'ramda'

import { transferSizeValue } from './mapping-bytes'
import { minList, off } from './utils'
import NetworkRequest from 'lighthouse/lighthouse-core/lib/network-request'

const toKb = divide(__, 1000)
const budgetMin = pipe(
  minList,
  off,
  n => n.toFixed(2),
  parseFloat
)

export const dataBytes = reports => {
  const bytesData = ([resourceType, title]) => {
    const values = map(pipe(transferSizeValue(resourceType), toKb), reports)
    const budget = budgetMin(values)
    return [`${title}\n ${budget}`, ...values, budget]
  }
  
  return map(bytesData, [
    [null, 'Total Size'],
    [NetworkRequest.TYPES.Document, 'Total Document'],
    [NetworkRequest.TYPES.Script, 'Total JS'],
    [NetworkRequest.TYPES.Stylesheet, 'Total CSS'],
    [NetworkRequest.TYPES.Image, 'Total IMG'],
    [NetworkRequest.TYPES.Font, 'Total Font'],
    [NetworkRequest.TYPES.XHR, 'Total XHR']
  ]);
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
