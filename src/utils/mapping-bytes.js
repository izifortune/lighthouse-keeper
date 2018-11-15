import { propEq, filter, path, pipe, pluck, prop, sum } from 'ramda'
import { audits } from './mapping-generic'
import NetworkRequest from 'lighthouse/lighthouse-core/lib/network-request';

/**
 * Mapping relatives to the total bytes on the page
 */

const networkRequests = pipe(
  audits,
  prop('network-requests')
)
export const networkRequestsExtendedInfo = pipe(
  networkRequests,
  path(['details', 'items'])
)

export const networkRequestsValue = pipe(
  networkRequests,
  prop('rawValue')
)

const isScript =
  propEq('resourceType', NetworkRequest.TYPES.Script)

const isStyle =
  propEq('resourceType', NetworkRequest.TYPES.Stylesheet)

const isXHR =
  // TODO Maybe add also Fetch
  propEq('resourceType', NetworkRequest.TYPES.XHR)

const isDocument =
  propEq('resourceType', NetworkRequest.TYPES.Document)

const isIMG =
  propEq('resourceType', NetworkRequest.TYPES.Image)

const isFONT =
  propEq('resourceType', NetworkRequest.TYPES.Font)

export const totalByteWeightValue = pipe(
  networkRequestsExtendedInfo,
  pluck('transferSize'),
  sum
)

export const totalByteWeightDocument = pipe(
  networkRequestsExtendedInfo,
  filter(isDocument),
  pluck('transferSize'),
  sum
)

export const totalByteWeightJS = pipe(
  networkRequestsExtendedInfo,
  filter(isScript),
  pluck('transferSize'),
  sum
)
export const totalByteWeightCSS = pipe(
  networkRequestsExtendedInfo,
  filter(isStyle),
  pluck('transferSize'),
  sum
)
export const totalByteWeightXHR = pipe(
  networkRequestsExtendedInfo,
  filter(isXHR),
  pluck('transferSize'),
  sum
)
export const totalByteWeightIMG = pipe(
  networkRequestsExtendedInfo,
  filter(isIMG),
  pluck('transferSize'),
  sum
)
export const totalByteWeightFONT = pipe(
  networkRequestsExtendedInfo,
  filter(isFONT),
  pluck('transferSize'),
  sum
)
