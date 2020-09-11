class Kyu {
    constructor() {
        this.items = [];
    }

    getItems()
    {
        return this.items;
    }

    front() {
        return this.items[0]; 
    }

    enqueue(data){
        this.items.push(data); 
    }

    dequeue() {
        return this.items.shift();
    }

    isEmpty() { 
        // return true if the queue is empty. 
        return this.items.length == 0; 
    }
}

module.exports = Kyu;