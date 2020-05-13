import * as ActionTypes from './ActionTypes'

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