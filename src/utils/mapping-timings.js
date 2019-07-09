import { prop, path, pipe, converge, sum } from 'ramda'

import { audits } from './mapping-generic'

export const reportAuditRawValue = auditName => pipe(
  audits,
  path([auditName, 'rawValue'])
)

const speedIndexMetricTimings = path([
  'speed-index-metric',
  'extendedInfo',
  'value',
  'timings',
])

const mainthreadWorkBreakdownExtendedInfo = path([
  'mainthread-work-breakdown',
  'extendedInfo',
  'value',
])

export const evaluateScript = pipe(
  audits,
  mainthreadWorkBreakdownExtendedInfo,
  prop('Evaluate Script')
)
export const compileScript = pipe(
  audits,
  mainthreadWorkBreakdownExtendedInfo,
  prop('Compile Script')
)
export const minorGC = pipe(
  audits,
  mainthreadWorkBreakdownExtendedInfo,
  prop('Minor GC')
)
