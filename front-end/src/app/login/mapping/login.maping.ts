import { concatMap, filter, mapTo } from 'rxjs/operators';
import { of } from 'rxjs';

export const CLEAN =  filter((val) => !!val)
export const MAPTOERROR =  mapTo(true)

export const GET_SHOW_ERROR = concatMap((streamValue) =>
  of(streamValue).pipe(CLEAN, MAPTOERROR)
);
