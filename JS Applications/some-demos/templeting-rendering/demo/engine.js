function renderTemplete(templeteString, data) {
  let pattern = /{{(.+)}}/gm;
  return templeteString.replace(pattern, (match, propName) => data[propName]);
}

export default renderTemplete;
