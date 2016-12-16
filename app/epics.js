import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { combineEpics } from 'redux-observable';

export const epic$ = new BehaviorSubject(combineEpics());
export const rootEpic = (action$, store) => epic$.mergeMap((epic) => epic(action$, store));
