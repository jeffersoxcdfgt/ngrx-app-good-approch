import {  of , iif  } from 'rxjs';
import {  map ,  mergeMap , filter } from 'rxjs/operators';

export const cleanBlank = map((str: any|string ) => {
    if (!str){
      return '';
    }

    if(Array.isArray(str)){
      return str;
    }

    return str.replace(/[\s-]/g, '');

});


export const  validateEmail = map((email: string) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
});

export const passwordLength = map((str: string) => {
  if (str.length >= 6){
    return true;
  }
  return false;
});

export const onlyNumber = map((str: string) => {
/*if (/^\d+$/.test(str)){
  return true;
}*/

if (/^\d+(\.\d+)*$/.test(str)){
  return true;
}

return false;
});


export const creditCardLength = map((str: string) => {
  const res = str.replace( /-/g, '');
  if (res.length === 16){
    return true;
  }
  return false;
});


export const nameLength = map((str: string) => {
  if (str.length <= 10){
    return true;
  }
  return false;
});


export const descriptionLength = map((str: string) => {
  if (str.length <= 116){
    return true;
  }
  return false;
});



export const ifEmpty = mergeMap((str: string) => iif(() => str.length === 0, of(false) , of(true)));
export const ifChecked = map((checked: boolean ) => checked );
export const validObs =  filter(value => value === true);