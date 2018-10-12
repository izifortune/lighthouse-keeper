import { pipe, path, prop } from 'ramda'

const reportCategories = prop('categories')

export const reportCategoriesPerfScore = pipe(
  reportCategories,
  path(['performance', 'score'])
)
export const reportCategoriesPWAScore = pipe(
  reportCategories,
  path(['pwa', 'score'])
)
export const reportCategoriesAccessibilityScore = pipe(
  reportCategories,
  path(['accessibility', 'score'])
)
export const reportCategoriesBestpracticeScore = pipe(
  reportCategories,
  path(['best-practices', 'score'])
)
export const reportCategoriesSEOScore = pipe(
  reportCategories,
  path(['seo', 'score'])
)
