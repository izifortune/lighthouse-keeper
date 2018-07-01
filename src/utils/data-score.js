import { map, pipe } from 'ramda'
import {
  reportCategoriesPerfScore,
  reportCategoriesPWAScore,
  reportCategoriesAccessibilityScore,
  reportCategoriesBestpracticeScore,
  reportCategoriesSEOScore,
} from './mapping-score'

import { maxList } from './utils'

const budgetMax = pipe(
  maxList,
  n => n.toFixed(2),
  parseFloat
)

export default function dataScore(reports) {
  const listPerf = map(reportCategoriesPerfScore, reports)
  const listPWA = map(reportCategoriesPWAScore, reports)
  const listBestPractice = map(reportCategoriesBestpracticeScore, reports)
  const listAccessibility = map(reportCategoriesAccessibilityScore, reports)
  const listSEO = map(reportCategoriesSEOScore, reports)

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
