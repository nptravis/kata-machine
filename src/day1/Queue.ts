type QueueNode<T> = {
    value: T;
    next?: QueueNode<T>;
}

export default class Queue<T> {
    public length: number;
    private head?: QueueNode<T>;
    private tail?: QueueNode<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(value: T): void {
        const node: QueueNode<T> = {value}
        this.length++;
        if(!this.tail){
            this.head = this.tail = node;
            return;
        } 

        this.tail.next = node;
        this.tail = node;
    }

    deque(): T | undefined {
        if(!this.head) return undefined;
        
        const head = this.head
        this.head = this.head.next;
        head.next = undefined;
        this.length--;

        if(this.length === 0){
            this.tail = undefined
        }

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value
    }
}