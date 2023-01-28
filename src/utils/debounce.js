export const debounce = (fetch, delay = 1000) => {
    let timer;

    return function (...args) {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        timer = null;
        fetch(...args);
      }, delay);
    }
}
