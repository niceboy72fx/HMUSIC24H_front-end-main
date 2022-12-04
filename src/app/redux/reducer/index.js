import { combineReducers } from "redux";
import {
  GetListMusicReducer,
  GetTop50Music,
  GetCountryMusic,
  GetListChangeReducer,
} from "./getListMusic";
import { GetSearchReducer } from "./searchReducer";
import { flagReducer } from "./flagReducer";
import { PlayMusicCard } from "./playMusicReducer";
const RootReducer = combineReducers({
  //------------Dispatch Change Music------------
  GetListChangeReducer,
  //------------Mains------------
  GetListMusicReducer,
  GetSearchReducer,
  //------------top50------------
  GetTop50Music,
  //------------country------------
  GetCountryMusic,
  //------------Flags------------
  flagReducer,
  //------------PlayMusicCard------------
  PlayMusicCard,
});
export default RootReducer;
