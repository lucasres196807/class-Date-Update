import {defaultEquals} from "./util.js";
import {Node} from "./linked.js";
export default class LinkedList{
	constructor(equalsFn = defaultEquals){
		this.count =0;
		this.head = undefined;
		this.equalsFn = equalsFn;
	}
	push(element){
		//linke.push(10)=> adiciona elemento no objeto
		const node = new Node(element);
		let current;
		if(this.head == null){
			this.head = node;
		}else{
			current = this.head;
			while(current.next != null){
				current = current.next;
			}
			current.next = node;
		}
		this.count++;
	}
	display(){
		let current = this.head;
		let result = {};
		let index =0;
		while(current !=null){
			result[index] = current.element;
			current = current.next;
			index++;
		}
		console.log(result);
	}
	removeAt(index){
		//remover elemento atráves do indice => linked.removeAt(2);
		//{"0":1}=> linked.removeAt(0)=> o 1 removido;
		if(index >=  0 && index < this.count){
			let current = this.head;
			if(index === 0){
				this.head = current.next;
			}
			else{
				let preveious;
				for(let i=0; i < index;i++){
					preveious = current;
					current = current.next;
				}
				preveious.next = current.next;
			}
			this.count--;
			return current.element;
		}
		return undefined;
	}
	geElementAt(index){
		//descrição sobre o elemento => Node { element: 13, next: Node { element: 40, next: undefined } };
		//exemplo de console.log(linked.geElementAt(3)); 
		if(index >= 0 && index <= this.count){
			let node = this.head;
			for(let i=0; i < index && node != null; i++){
				node = node.next;
			}
			return node;
		}
		return undefined;
	}
	insert(element,index){
		//inserir um elemento atráves da posição
		//exemplo, linked.insert(600,3) elemento 300 e indice 3;
		if(index >= 0 && index <= this.count){
			const node = new Node(element);
			if(index === 0){
				const current = this.head;
				node.next = current;
				this.head = node;

			}else{
				const preveious = this.geElementAt(index -1);
				const current = preveious.next;
				node.next = current;
				preveious.next = node;
			}
			this.count++;
			return true;
		}
		return false;
	}
	indexOf(element){
		//achar a posição do elemento através do elemento
		//exemplo, => {"1":0}linked.indexOf(0);
		let current = this.head;
		for(let i=0; i < this.count && current != null; i++){
			if(this.equalsFn(element,current.element)){
				return i;
			}
			current = current.next;
		}
		return -1;
	}
	remove(element){
	//remove um indice através do elemento {"0":1} => linked.remove(1); esse será removido
		const index = this.indexOf(element);
		return this.removeAt(index);
	}
	size(){
		//retorna um tamanho do objeto => console.log(linked.size());
		return this.count;
	}
	isEmpty(){
		//perguntando se o primeiro elemento da lista está vazio 
		return this.size() === 0;
	}
	getHead(){
		//retorna o primeiro elemento e descrição dos posteriores
		return this.head;
	}
	toString(){
		if(this.head == null){
			return "";
		}
		let objString = `${this.head.element}`;
		let current = this.head.next;
		for(let i=1; i < this.size() && current != null; i++){
			objString = `${objString},${current.element}`;
			current = current.next;
		}
		return objString;
	}

} 