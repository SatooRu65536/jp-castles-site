import { atom, useAtomValue, useSetAtom } from "jotai";

const selectMarkerId = atom<string>("");

/**
 * @description 選択中のマーカーの状態を取得する
 * @returns 選択中のマーカーの状態
 */
export function useSelectMarkerIdState() {
  return useAtomValue(selectMarkerId);
}

/**
 * @description 編集中のマーカーの状態を更新する
 * @returns 編集中のマーカーの状態を更新する関数
 */
export function useSelectMarkerIdMutators() {
  const setSelectMarkerIdState = useSetAtom(selectMarkerId);

  return { setSelectMarkerIdState };
}
