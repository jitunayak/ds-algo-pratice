class LSNode {
	/**
	 *
	 * @param {number} data
	 * @param {LSNode} next
	 */
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

const a = new LSNode(1);
const b = new LSNode(2);
const c = new LSNode(3);
const d = new LSNode(4);
const e = new LSNode(5);
const f = new LSNode(6);
const g = new LSNode(7);
const h = new LSNode(8);
const i = new LSNode(9);
const j = new LSNode(10);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;
h.next = i;
i.next = j;
j.next = null;

const printLinkedList = (head) => {
	let current = head;
	while (current) {
		console.log(current.data);
		current = current.next;
	}
};

const findMiddle = (head) => {
	let slow = head;
	let fast = head;
	while (fast && fast.next) {
		console.log("slow", slow.data, "fast", fast.data);
		slow = slow.next;
		fast = fast.next.next;
	}
	console.log('final', slow.data);
};

printLinkedList(a);
findMiddle(a);

/** OUTPUT
1
2
3
4
5
6
7
8
9
10
slow 1 fast 1
slow 2 fast 3
slow 3 fast 5
slow 4 fast 7
slow 5 fast 9
final 6

 */