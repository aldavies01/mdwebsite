import { useEffect } from "react";

function setTag(tagName, attrs) {
  const selector = Object.entries(attrs)
    .map(([k, v]) => `[${k}="${CSS.escape(String(v))}"]`)
    .join("");
  let el = document.head.querySelector(`${tagName}${selector}`);
  if (!el) {
    el = document.createElement(tagName);
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  el.setAttribute("data-managed", "app");
  return el;
}

export function useHead({ title, meta = [], links = [] }) {
  useEffect(() => {
    const managed = [];

    if (title) {
      document.title = title;
    }
    meta.forEach((m) => managed.push(setTag("meta", m)));
    links.forEach((l) => managed.push(setTag("link", l)));

    return () => {
      managed.forEach((el) => el.remove());
    };
  }, [title, JSON.stringify(meta), JSON.stringify(links)]);
}
