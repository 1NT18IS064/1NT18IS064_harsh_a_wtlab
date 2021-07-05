class Stack {
    constructor()
    {
        this.items = [];
    }
    push(element)
    {
    this.items.push(element);
    }
    pop()
    {
    if (this.items.length == 0)
        return "Underflow";
    return this.items.pop();
    }
    peek()
    {
    return this.items[this.items.length - 1];
    }
    isEmpty()
    {
    return this.items.length == 0;
    }
    printStack()
    {
    var str = "";
    for (var i = 0; i < this.items.length; i++)
        str += this.items[i] + " ";
    return str;
    }
}
var stack = new Stack();

console.log("stack empty? : "+stack.isEmpty()); 

console.log(stack.pop()); 

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.printStack());

console.log("topmost element of stack : "+stack.peek());

console.log("popped : "+stack.pop());

console.log(stack.printStack()); 
