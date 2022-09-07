

import { of } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { ResponseLogin } from 'src/app/login/model/login';
import { CLEAN } from '../../login/mapping/login.maping';

export const GET_USER_NAME = map((datauser:ResponseLogin) => datauser)
export const GET_OBJ_USER = map((userinf) => userinf as ResponseLogin|any)

export const GET_USER = concatMap((streamValue) =>
  of(streamValue).pipe(CLEAN,GET_OBJ_USER,GET_USER_NAME)
);
