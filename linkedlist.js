class node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
};

class sll{
    constructor(){
        this.head = null;
        this.leng = 0;
    }
    log(d){
        console.log(d);
    }
    insert_end(val){
        const nn = new node(val);
        this.log(`Inserted Element: ${val} at End`);
        if(this.head==null){
            this.head = nn;
            this.leng++;
            return;
        }
        let tmp = this.head;
        while(tmp.next){
            tmp = tmp.next;
        }
        tmp.next = nn;
        this.leng++;
        return;
    }
    insert_at(idx,val){
        const nn = new node(val);
        this.log(`Inserted Element: ${val} at index ${idx}`);
        if(this.head==null&&idx>0){
            this.log('Incorrect index [List is not that big]');
            return;
        }else if(this.head==null){
            this.head == nn;
            this.leng++;
            return;
        }
        let tmp = this.head;
        for(let i=0;i<idx-2;i++){
            tmp = tmp.next;
        }
        let tmp2 = tmp.next;
        tmp.next = nn;
        tmp.next.next = tmp2;
        this.leng++;
        return;
    }
    insert_fro(val){
        const nn = new node(val);
        this.log(`Inserted Element: ${val} at Front`);
        if(this.head==null){
            this.head == nn;
            this.leng++;
            return;
        }
        let tmp = null;
        tmp = this.head;
        this.head = nn;
        this.head.next = tmp;
        this.leng++;
        return;
    }
    length(){
        this.log(`Length of list: ${this.leng} Elements`);
    }
    delete(val){
        if(this.head == null){
            this.log("Empty List");
            return;
        }
        let tmp = this.head;
        while(tmp.next.data!=val){
            tmp = tmp.next;
        }
        tmp.next = tmp.next.next;
        this.log(`Element Deleted: ${val}`);
        this.leng--;
    }
    index_of(elem){
        if(this.head==null){
            this.log("Empty List");
            return;
        }
        let ctr = 0;
        let tmp = this.head;
        while(tmp.data!=elem){
            ctr++;
            tmp = tmp.next;
        }
        this.log(`Index of ${elem} is at ${ctr}`);
    }
    print(){
        if(this.head==null){
            return;
        }
        let tmp = this.head;
        this.log('Stored Values: ');
        while(tmp){
            console.log(tmp.data);
            tmp = tmp.next;
        }
    }
};

sll = new sll();
sll.insert_end(1);
sll.insert_end(2);
sll.insert_end(3);
sll.insert_end(4);
sll.insert_end(5);
sll.insert_at(2,50);
sll.print();
sll.insert_fro(6);
sll.print();
sll.index_of(4);
sll.delete(3);
sll.length();
sll.print();
