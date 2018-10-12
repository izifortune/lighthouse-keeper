import { filter, path, pipe, pluck, prop, sum, test } from 'ramda'
import { audits } from './mapping-generic'

/**
 * Mapping relatives to the total bytes on the page
 */

const totalByteWeight = pipe(
  audits,
  prop('total-byte-weight')
)
export const totalByteWeightExtendedInfo = pipe(
  totalByteWeight,
  path(['details', 'items'])
)

export const totalByteWeightValue = pipe(
  totalByteWeight,
  prop('rawValue')
)

const endsJS = test(/\.js$/g)
const endsCSS = test(/\.css$/g)
const endsJSON = test(/\.json$/g)
const endsIMG = test(/\.(png|jpg|jpeg|svg|webp|gif)/g)
const endsFONT = test(/\.(ttf|woff|woff2|otf|eot)/g)
const urlEndsJS = pipe(
  prop('url'),
  endsJS
)
const urlEndsCSS = pipe(
  prop('url'),
  endsCSS
)
const urlEndsJSON = pipe(
  prop('url'),
  endsJSON
)
const urlEndsIMG = pipe(
  prop('url'),
  endsIMG
)
const urlEndsFONT = pipe(
  prop('url'),
  endsFONT
)

export const totalByteWeightJS = pipe(
  totalByteWeightExtendedInfo,
  filter(urlEndsJS),
  pluck('totalBytes'),
  sum
)
export const totalByteWeightCSS = pipe(
  totalByteWeightExtendedInfo,
  filter(urlEndsCSS),
  pluck('totalBytes'),
  sum
)
export const totalByteWeightJSON = pipe(
  totalByteWeightExtendedInfo,
  filter(urlEndsJSON),
  pluck('totalBytes'),
  sum
)
export const totalByteWeightIMG = pipe(
  totalByteWeightExtendedInfo,
  filter(urlEndsIMG),
  pluck('totalBytes'),
  sum
)
export const totalByteWeightFONT = pipe(
  totalByteWeightExtendedInfo,
  filter(urlEndsFONT),
  pluck('totalBytes'),
  sum
)

export const numberOfRequests = pipe(
  audits,
  path(['total-byte-weight', 'extendedInfo', 'value', 'totalCompletedRequests'])
)
