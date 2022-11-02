import { combineReducers } from "redux";
import {
  GetListMusicReducer,
  GetTop50Music,
  GetCountryMusic,
} from "./getListMusic";
import { GetSearchReducer } from "./searchReducer";

const RootReducer = combineReducers({
  //------------Mains------------
  GetListMusicReducer,
  GetSearchReducer,
  //------------top50------------
  GetTop50Music,
  //------------country------------
  GetCountryMusic,
});
export default RootReducer;
