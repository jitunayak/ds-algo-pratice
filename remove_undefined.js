function removeUndefined(obj) {
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object") {
      removeUndefined(obj[key]);
    }
    if (obj[key] === undefined) {
      delete obj[key];
    }
  });
}

const data = {
  a: 10,
  b: undefined,
  c: {
    k: "jitu",
    l: undefined,
  },
};

removeUndefined(data);
console.log(data); // { a: 10, c: { k: 'jitu' } }
