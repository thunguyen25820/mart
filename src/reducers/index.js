import { combineReducers } from "redux";
import { category } from "./category";
import { product } from "./product";
import { app } from "./app"
const rootReducer = combineReducers({
    category,
    product,
    app,
});

export default rootReducer;