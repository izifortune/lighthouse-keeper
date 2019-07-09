import { propEq, filter, path, pipe, pluck, prop, sum, always } from 'ramda'
import { audits } from './mapping-generic'

export const transferSizeValue = resourceType => pipe(
  audits,
  prop('network-requests'),
  path(['details', 'items']),
  filter(resourceType ? propEq('resourceType', resourceType) : always(true)),
  pluck('transferSize'),
  sum
)
