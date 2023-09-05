import LinkedList from "./index.js";
const linked = new LinkedList();
linked.push(15);
linked.push(10);
linked.push(13);
linked.push(40);
/*console.log(linked.geElementAt(3));
console.log(linked.geElementAt(0));
console.log(linked.geElementAt(1));
console.log(linked.geElementAt(2));
*/
console.log(linked.size());
console.log(linked.isEmpty());
console.log(linked.getHead());
linked.display();
console.log(linked.toString());