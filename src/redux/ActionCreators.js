import * as ActionTypes from './ActionTypes'
import {baseUrl} from '../hardcode/baseUrl'

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
    return fetch(baseUrl+'dishes').
    then(response=>response.json()).
    then(dishes=>dispatch(DishesAdd(dishes)))
}

export const CommentsFailed = (error)=>({
    type:ActionTypes.COMMENTS_FAILED,
    payload:error,
})

export const CommentsAdd = (comments)=>({
    type:ActionTypes.COMMENTS_ADD,
    payload:comments,
})

export const fetchComments = () => (dispatch) =>{
    return fetch(baseUrl+'comments').
    then(response=>response.json()).
    then(comments=>dispatch(CommentsAdd(comments)))
}

export const PromosLoading = ()=>({
    type:ActionTypes.PROMOS_LOADING,
})

export const PromosFailed = (error)=>({
    type:ActionTypes.PROMOS_FAILED,
    payload:error,
})

export const PromosAdd = (promos)=>({
    type:ActionTypes.PROMOS_ADD,
    payload:promos,
})

export const fetchPromos = () => (dispatch) =>{
    dispatch(PromosLoading());
    return fetch(baseUrl+'promotions').
    then(response=>response.json()).
    then(promos=>dispatch(PromosAdd(promos)))
}