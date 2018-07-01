import { prop, path, pipe, converge, sum } from 'ramda'

import { audits } from './mapping-generic'

export const firstMeaningfulPaint = pipe(
  audits,
  path(['first-meaningful-paint', 'rawValue'])
) //ms
export const firstInteractive = pipe(
  audits,
  path(['first-interactive', 'rawValue'])
) //ms

const speedIndexMetricTimings = path([
  'speed-index-metric',
  'extendedInfo',
  'value',
  'timings',
])
export const visuallyComplete = pipe(
  audits,
  speedIndexMetricTimings,
  prop('visuallyComplete')
) //ms
export const firstVisualChange = pipe(
  audits,
  speedIndexMetricTimings,
  prop('firstVisualChange')
) //ms

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

export const jsParseCompile = converge((...args) => sum(args), [
  evaluateScript,
  compileScript,
  minorGC,
])
export const timeToFirstByte = pipe(
  audits,
  path(['time-to-first-byte', 'rawValue'])
) //ms
