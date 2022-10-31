import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { ActionConstant, ActionGet50Music } from "../../../constant/common";
import { Fetch50Music, FetchGetAllMusic } from "../../../utils/api/apiServices";
import { GetListMusicSuccess, GetTopSuccess } from "../../action/common";

export function* GetListDataMusic() {
  try {
    const listMusic = yield call(() => FetchGetAllMusic());
    yield put(GetListMusicSuccess(listMusic?.data));
  } catch (e) {
    console.log(e);
  }
}

export function* GetTopMusic() {
  try {
    const listMusic = yield call(() => Fetch50Music());
    yield put(GetTopSuccess(listMusic?.data));
  } catch (e) {
    console.log(e);
  }
}

//----------------------------------------------------------------
export function* WatchListMusic() {
  yield takeLatest(ActionConstant.GETALLMUSICACTION, GetListDataMusic);
  yield takeLatest(ActionGet50Music.GETALLTOPMUSICACTION, GetTopMusic);
}
