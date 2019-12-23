function orderByProps(data, sorts) {
  const array = [];
  sorts.forEach((item) => {
    for (const i in data) {
      // eslint-disable-next-line no-prototype-builtins
      if ((data.hasOwnProperty(i)) && (item === i)) {
        array.push({ key: i, value: data[i] });
      }
    }
  });
  Object.entries(data)
    .sort()
    .filter((item) => !sorts.includes(item[0]))
    .forEach((item) => array.push(
      { key: item[0], value: item[1] },
    ));
  return array;
}

export default orderByProps;
