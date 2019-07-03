import { pipe, path, prop } from 'ramda'

export const reportCategoriesScore = category => pipe(
  prop('categories'),
  path([category, 'score'])
)
