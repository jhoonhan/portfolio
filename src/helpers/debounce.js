const debounce = (fn, tps) => {
  let wait = false;
  if (!wait) {
    fn();
    wait = true;
    setTimeout(() => {
      wait = false;
    }, 1000 / tps);
  }
};

export default debounce;
