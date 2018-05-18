import { combineEpics } from 'redux-observable'
import { map, mapTo, delay } from 'rxjs/operators'
import { INIT, message } from './actions'

const demoEpic = actions$ =>
  actions$
    .ofType(INIT)
    .pipe(
      mapTo('Hello, World!'),
      delay(1500),
      map(result => message(result))
    )

export const rootEpic = combineEpics(demoEpic)
