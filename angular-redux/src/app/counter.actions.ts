import {createAction ,props} from '@ngrx/store'


export const increment = createAction('increment',  props<{payload: {incrementNumber : any;}}>());
export const decrement = createAction('decrement');

export const reset = createAction('reset');