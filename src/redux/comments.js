import * as ActionTypes from './ActionTypes'

export const Comments=(state={
    comments:[],
    error:null,
},action)=>{
    switch(action.type){
        case ActionTypes.COMMENTS_ADD :
            return {...state, error:null, comments:action.payload}
        case ActionTypes.COMMENTS_FAILED :
            return {...state, error:action.payload, comments:[]}
        case ActionTypes.ADD_COMMENT :
            var comment = action.payload;
            return {...state, comments:state.comments.concat(comment)}
        default:
            return state;
    }
}