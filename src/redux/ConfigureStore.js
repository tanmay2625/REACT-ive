import {Promotions} from './promotions'
import {Leaders} from './leaders'
import {Dishes} from './dishes'
import {Comments} from './comments'
import {createStore, combineReducers} from "redux"

export const ConfigureStore = () =>{
    const store=createStore(
        combineReducers({
            dishes : Dishes,
            comments : Comments,
            promotions : Promotions,
            leaders : Leaders,
        })
    );
    return store;
}