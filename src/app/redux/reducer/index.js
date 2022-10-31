import { combineReducers } from "redux";
import { GetListMusicReducer, GetTop50Music } from "./getListMusic";
import { GetSearchReducer } from "./searchReducer";

const RootReducer = combineReducers({
  //------------Mains------------
  GetListMusicReducer,
  GetSearchReducer,
  //------------top50------------
  GetTop50Music,
});
export default RootReducer;
