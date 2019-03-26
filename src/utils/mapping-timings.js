import { prop, path, pipe, converge, sum } from 'ramda'

import { audits } from './mapping-generic'

export const firstMeaningfulPaint = pipe(
  audits,
  path(['first-meaningful-paint', 'rawValue'])
) //ms

export const firstCpuIdle = pipe(
  audits,
  path(['first-cpu-idle', 'rawValue'])
)

export const firstContentfulPaint = pipe(
  audits,
  path(['first-contentful-paint', 'rawValue'])
)

export const bootupTime = pipe(
  audits,
  path(['bootup-time', 'rawValue'])
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

export const timeToFirstByte = pipe(
  audits,
  path(['time-to-first-byte', 'rawValue'])
) //ms
