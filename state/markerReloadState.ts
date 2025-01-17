import { atom, useAtomValue, useSetAtom } from "jotai";

const markerReload = atom<boolean>(true);

/**
 * @description マーカーのリロードフラグを取得する
 * @returns マーカーのリロードフラグ
 */
export function useMarkerReloadState() {
  return useAtomValue(markerReload);
}

/**
 * @description マーカーのリロードフラグを更新する関数を取得する
 * @returns マーカーのリロードフラグを更新する関数
 */
export function useMarkerReloadMutators() {
  const setReloadFlag = useSetAtom(markerReload);

  return { setReloadFlag };
}
