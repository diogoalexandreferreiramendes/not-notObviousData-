import { createStore, applyMiddleware } from "redux";
import getData from "./reducer/dataSet";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const middleWare = [thunk]

const store = createStore(
                    getData,
                    composeWithDevTools(applyMiddleware(...middleWare))
                    )

export default store