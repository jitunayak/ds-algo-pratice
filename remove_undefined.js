function removeUndefined(obj) {
	// Object.keys() can't connvert null values to object.
	Object.keys(obj).forEach((key) => {
		if (typeof obj[key] === "object") {
			removeUndefined(obj[key]);
		}
		if (obj[key] === undefined) {
			delete obj[key];
		}
	});


}

function removeUndefinedAndNull(obj) {
	Object.entries(obj).forEach(([key, value]) => {
		if (value === undefined || value === null) {
			delete obj[key]
		}
		if (value && typeof value === "object") {
			removeUndefined(value)
		}
	})
}

const test1 = {
	a: 10,
	b: undefined,
	c: {
		k: "jitu",
		l: undefined,
	},
};

removeUndefined(test1);
console.log(test1); // { a: 10, c: { k: 'jitu' } }


const test2 = {
	a: 10,
	b: undefined,
	c: {
		k: "jitu",
		l: undefined,
	},
	d: null
};
removeUndefinedAndNull(test2)
console.log(test2)