const flatArray = arr => {
  const flat = arr.reduce((priveous, current) => {
    return priveous.concat(current);
  }, []);
  return flat.sort((a, b) => a - b);
};
