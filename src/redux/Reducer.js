import {DISHES} from '../hardcode/dishes'
import {COMMENTS} from '../hardcode/comments'
import {LEADERS} from '../hardcode/leaders'
import {PROMOTIONS} from '../hardcode/promotions'

export const initialState={
    dishes : DISHES,
    comments : COMMENTS,
    leaders : LEADERS,
    promotions : PROMOTIONS,
}

export const Reducer = (state=initialState,action)=>{
    return state;
}