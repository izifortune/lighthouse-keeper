import { pipe, path, prop } from 'ramda'

export const reportCategoryScore = category => pipe(
  prop('categories'),
  path([category, 'score'])
)
