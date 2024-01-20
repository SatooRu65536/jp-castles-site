/**
 * localStorage から取得する
 * @param key キー
 * @param init 初期値
 * @returns 保存された値
 */
export function getLocalStorage<T>(key: string, init: T): T {
  if (typeof window === "undefined") return init;

  const valueStr = localStorage.getItem(key);
  if (valueStr === null) return init;

  const value: T = JSON.parse(valueStr);
  return value;
}

/**
 * @description localStorage に保存する
 * @param key キー
 * @param value 保存する値
 */
export function setLocalStorage<T>(key: string, value: T) {
  if (typeof window === "undefined") return;

  const valueStr = JSON.stringify(value);
  localStorage.setItem(key, valueStr);
}
