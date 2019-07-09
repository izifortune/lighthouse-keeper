import { map, pipe } from 'ramda'
import { reportCategoryScore } from './mapping-score'

import { maxList } from './utils'

const budgetMax = pipe(
  maxList,
  n => n.toFixed(2),
  parseFloat
)

export default function dataScore(reports) {
  const categoryData = ([category, title]) => {
    const scores = map(reportCategoryScore(category), reports)
    const budget = budgetMax(scores)
    return [`${title}\n ${budget}`, ...scores, budget]
  }
  
  return map(categoryData, [
    ['performance', 'Performance'],
    ['pwa', 'PWA'],
    ['best-practices', 'Best Practice'],
    ['accessibility', 'Accessibility'],
    ['seo', 'SEO']
  ]);
}
