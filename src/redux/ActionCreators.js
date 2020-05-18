import * as ActionTypes from './ActionTypes'
import {baseUrl} from '../hardcode/baseUrl'

export const addComment = (comment) =>{
    return{
        type : ActionTypes.ADD_COMMENT,
        payload : comment
    }
}

export const postComment = (dishId, author, rating, comment) => dispatch =>{
    var newComment={
        dishId : dishId,
        author : author,
        rating : rating,
        comment : comment,
    };
    newComment.date=new Date().toISOString();
    fetch(baseUrl+'comments',{
        method:'POST',
        body : JSON.stringify(newComment),
        headers:{
            "Content-Type" : "application/json"
        },
        credentials:"same-origin"
    }).
    then(response=>{
        if(response.ok)return response;
        else{
            var error=new Error('Error ' + response.status + ': ' + response.statusText)
            error.response = response
            throw error;
        }
    },error=>{
        var message=new Error(error.message);
        throw message;
    }).
    then(response=>response.json()).
    then(comment=>dispatch(addComment(comment))).
    catch(error=>alert("Your comment could not be posted.\nError: "+error.message))

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
    then(response=>{
        if(response.ok)return response;
        else{
            var error=new Error('Error ' + response.status + ': ' + response.statusText)
            error.response = response
            throw error;
        }
    },error=>{
        var message=new Error(error.message);
        throw message;
    }).
    then(response=>response.json()).
    then(dishes=>dispatch(DishesAdd(dishes))).
    catch(error=>dispatch(DishesFailed(error.message)));
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
    then(response=>{
        if(response.ok)return response;
        else{
            var error=new Error('Error ' + response.status + ': ' + response.statusText)
            error.response = response
            throw error;
        }
    },error=>{
        var message=new Error(error.message);
        throw message;
    }).
    then(response=>response.json()).
    then(comments=>dispatch(CommentsAdd(comments))).
    catch(error=>dispatch(CommentsFailed(error.message)));
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
    then(response=>{
        if(response.ok)return response;
        else{
            var error=new Error('Error ' + response.status + ': ' + response.statusText)
            error.response = response
            throw error;
        }
    },error=>{
        var message=new Error(error.message);
        throw message;
    }).
    then(response=>response.json()).
    then(promos=>dispatch(PromosAdd(promos))).
    catch(error=>dispatch(PromosFailed(error.message)));
}