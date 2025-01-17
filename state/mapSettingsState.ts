import { MapSettings } from "@/types/map";
import { LatLng } from "leaflet";
import { DEFAULT_ZOOM } from "@/const/scale";
import { useEffect } from "react";
import {
  getLocalStorage,
  setLocalStorage,
} from "@/foundations/useLocalStorage";
import { atom, useAtomValue } from "jotai";

const init = {
  center: new LatLng(35.1855, 136.89939),
  zoom: DEFAULT_ZOOM,
} as const;

const mapSettings = atom<MapSettings>(
  getLocalStorage<MapSettings>("mapSettings", init),
);

/**
 * @description マップの設定を取得する
 * @returns マップの設定
 */
export function useMapSettingsState() {
  return useAtomValue(mapSettings);
}

/**
 * @description マップの設定を更新する
 * @returns マップの設定を変更する関数
 */
export function useMapSettingsMutator() {
  const mapSettingsState = useAtomValue(mapSettings);

  /**
   * @description 中心位置を変更する
   * @param center マップの中心位置
   */
  function setSettingsCenter(center: LatLng) {
    const v = getLocalStorage("mapSettings", init);
    setLocalStorage<MapSettings>("mapSettings", { ...v, center });
  }

  /**
   * @description ズームレベルを変更する
   * @param zoom ズームレベル
   */
  function setSettingsZoom(zoom: number) {
    const v = getLocalStorage("mapSettings", init);
    setLocalStorage<MapSettings>("mapSettings", { ...v, zoom });
  }

  useEffect(() => {
    if (typeof window === "undefined") return;

    const settingsStr = JSON.stringify(mapSettingsState);
    localStorage.setItem("mapSettings", settingsStr);
  }, [mapSettingsState]);

  return { setSettingsCenter, setSettingsZoom };
}
