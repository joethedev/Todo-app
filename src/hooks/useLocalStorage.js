import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValut) {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof defaultValut === "function") {
      return defaultValut();
    } else {
      return defaultValut;
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
