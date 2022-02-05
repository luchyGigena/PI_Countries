import { createStore , applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // libreria que me hace automaticamente el WINDOWS._
import thunk from 'redux-thunk';
import rootReducer from '../reducer';


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));