import { map, pipe } from 'ramda'
import { reportCategoriesScore } from './mapping-score'

import { maxList } from './utils'

const budgetMax = pipe(
  maxList,
  n => n.toFixed(2),
  parseFloat
)

export default function dataScore(reports) {
  const listPerf = map(reportCategoriesScore('performance'), reports)
  const listPWA = map(reportCategoriesScore('pwa'), reports)
  const listBestPractice = map(reportCategoriesScore('best-practices'), reports)
  const listAccessibility = map(reportCategoriesScore('accessibility'), reports)
  const listSEO = map(reportCategoriesScore('seo'), reports)

  const budgetPerf = budgetMax(listPerf)
  const budgetPWA = budgetMax(listPWA)
  const budgetBestPractice = budgetMax(listBestPractice)
  const budgetAccessibility = budgetMax(listAccessibility)
  const budgetSEO = budgetMax(listSEO)

  return [
    [`Performance\n ${budgetPerf}`, ...listPerf, budgetPerf],
    [`PWA\n ${budgetPWA}`, ...listPWA, budgetPWA],
    [
      `Best Practice\n ${budgetBestPractice}`,
      ...listBestPractice,
      budgetBestPractice,
    ],
    [
      `Accessibility\n ${budgetAccessibility}`,
      ...listAccessibility,
      budgetAccessibility,
    ],
    [`SEO\n ${budgetSEO}`, ...listSEO, budgetSEO],
  ]
}
