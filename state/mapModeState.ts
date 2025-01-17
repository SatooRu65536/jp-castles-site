import { atom, useAtomValue, useSetAtom } from "jotai";

const mapMode = atom<"edit" | "view">("view");

/**
 * @description マップのモードを取得する
 * @returns　マップのモード
 */
export function useMapModeState() {
  return useAtomValue(mapMode);
}

/**
 * @description マップのモードを更新する
 * @returns マップのモードを更新する関数
 */
export function useMapModeMutators() {
  const setMapModeState = useSetAtom(mapMode);

  return { setMapModeState };
}
