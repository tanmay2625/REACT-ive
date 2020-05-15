import * as ActionTypes from './ActionTypes'
import {DISHES} from '../hardcode/dishes'

export const addComment = (dishId, author, rating, comment) =>{
    return{
        type : ActionTypes.ADD_COMMENT,
        payload : {
            dishId : dishId,
            author : author,
            rating : rating,
            comment : comment,
        }
    }
}

export const DishesLoading = ()=>({
    type:ActionTypes.DISHES_LOADING,
})

export const DishesFailed = (error)=>({
    type:ActionTypes.DISHES_FAILED,
    payload:error,
})

export const DishesAdd = (dishes)=>({
    type:ActionTypes.DISHES_ADD,
    payload:dishes,
})

export const fetchDishes = () => (dispatch) =>{
    dispatch(DishesLoading());
    setTimeout(()=>{
        dispatch(DishesAdd(DISHES))
    },2000)
}