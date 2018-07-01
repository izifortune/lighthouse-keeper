import { into } from 'ramda'
import { domainTransducer } from './utils'

const dataUrl = reports => ['Metrics', ...into([], domainTransducer, reports)]

export default dataUrl
