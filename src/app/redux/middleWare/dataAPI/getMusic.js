import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  ActionConstant,
  ActionGet50Music,
  ActionGetCountryMusic,
} from "../../../constant/common";
import {
  Fetch50Music,
  FetchGetAllMusic,
  FetchKoreanMusic,
  FetchUSMusic,
  FetchVietnameseMusic,
} from "../../../utils/api/apiServices";
import {
  GetKoreanMusicSuccess,
  GetListMusicSuccess,
  GetTopSuccess,
  GetUSMusicSuccess,
  GetVietNameseMusicSuccess,
} from "../../action/common";

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

export function* GetCountryMusic() {
  try {
    const listVietnameseMusic = yield call(() => FetchVietnameseMusic());
    const listKoreanMusic = yield call(() => FetchKoreanMusic());
    const listUSMusic = yield call(() => FetchUSMusic());
    yield put(GetVietNameseMusicSuccess(listVietnameseMusic?.data));
    yield put(GetKoreanMusicSuccess(listKoreanMusic?.data));
    yield put(GetUSMusicSuccess(listUSMusic?.data));
  } catch (e) {
    console.log(e);
  }
}

//----------------------------------------------------------------
export function* WatchListMusic() {
  yield takeLatest(ActionConstant.GETALLMUSICACTION, GetListDataMusic);
  yield takeLatest(ActionGet50Music.GETALLTOPMUSICACTION, GetTopMusic);
  yield takeLatest(ActionGetCountryMusic.GETCOUNTRYATIONS, GetCountryMusic);
}
