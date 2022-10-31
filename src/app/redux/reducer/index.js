import { combineReducers } from "redux";
import { GetListMusicReducer } from "./getListMusic";
import { GetSearchReducer } from "./searchReducer";
import keyMenuReducer from "./keyMenuReducer";
const RootReducer = combineReducers({
  GetListMusicReducer,
  GetSearchReducer,
  //------------Mains------------
  keyMenuReducer,
});
export default RootReducer;
