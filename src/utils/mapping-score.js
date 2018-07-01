import { pipe, find, propEq, prop } from 'ramda'

const reportCategories = prop('reportCategories')

export const reportCategoriesPerfScore = pipe(
  reportCategories,
  find(propEq('id', 'performance')),
  prop('score')
)
export const reportCategoriesPWAScore = pipe(
  reportCategories,
  find(propEq('id', 'pwa')),
  prop('score')
)
export const reportCategoriesAccessibilityScore = pipe(
  reportCategories,
  find(propEq('id', 'accessibility')),
  prop('score')
)
export const reportCategoriesBestpracticeScore = pipe(
  reportCategories,
  find(propEq('id', 'best-practices')),
  prop('score')
)
export const reportCategoriesSEOScore = pipe(
  reportCategories,
  find(propEq('id', 'seo')),
  prop('score')
)
