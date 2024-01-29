import cookie from "js-cookie";

export const storageCheck = (nameItem, defaultState, type = 'cookies') => {
  if (type === 'local') {
    return typeof window !== 'undefined'
      ? localStorage.getItem(nameItem)
        ? JSON.parse(localStorage.getItem(nameItem))
        : defaultState ?? []
      : null;
  }

  if (type === 'session') {
    return typeof window !== 'undefined'
      ? sessionStorage.getItem(nameItem)
        ? JSON.parse(sessionStorage.getItem(nameItem))
        : defaultState ?? []
      : null;
  }

  return typeof window !== 'undefined'
    ? cookie.get(nameItem)
      ? JSON.parse(cookie.get(nameItem))
      : defaultState ?? []
    : null;
};

export const storageSet = (nameItem, value, type = 'cookies') => {
  if (type === 'local') {
    typeof window !== 'undefined'
      ? localStorage.setItem(nameItem, JSON.stringify(value))
      : null;

    return;
  }

  if (type === 'session') {
    typeof window !== 'undefined'
      ? sessionStorage.setItem(nameItem, JSON.stringify(value))
      : null;

    return;
  }

  typeof window !== 'undefined'
    ? cookie.set(nameItem, JSON.stringify(value))
    : null;
};

export const storageRemove = (nameItem, type = 'cookies') => {
  if (type === 'local') {
    typeof window !== 'undefined' ? localStorage.removeItem(nameItem) : null;

    return;
  }

  if (type === 'session') {
    typeof window !== 'undefined' ? sessionStorage.removeItem(nameItem) : null;

    return;
  }

  typeof window !== 'undefined' ? cookie.remove(nameItem) : null;
};