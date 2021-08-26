/*create a empty queue*/
const queue = new Queue();
console.log(queue);
console.log(queue.isEmpty())

/*add some value to the queue and use print method*/
queue.enqueue("first");
queue.enqueue(2);
queue.enqueue(["example data"]);
console.log(queue.print());

/*peek method and dequeue*/
console.log(queue.getSize())//3
console.log(queue.peek())//pick value but dont eliminate que value of the queue
console.log(queue.getSize())//the same size

console.log(queue.dequeue());//
console.log(queue.getSize())//the size is 2 now


class Queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.end = 0;
    };

    enqueue(data) {
        this.items[this.end] = data;
        this.end++;
    };

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        ;
        const data = this.items[this.front];
        this.front++;
        return data;

    };

    getSize() {
        return this.end - this.front;
    };

    isEmpty() {
        return this.front === this.end;
    };

    peek() {
        if (this.isEmpty())
            return null;
        return this.items[this.front];

    }

    print() {
        if (this.isEmpty()) {
            return null;
        }
        let result = '';
        for (let i = this.front; i < this.end; i++) {
            result += this.items[i] + ' ';
        }

        return result;
    };


}

