// import { applyMiddleware, createStore } from 'redux';
// import rootReducer from './Reducer';
// import thunk from 'redux-thunk'

// const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// );

// export default store




import rootReducer from "./Reducer";
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer : rootReducer,
}  
);

export default store