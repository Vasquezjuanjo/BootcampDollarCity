//3,5,15,10,21
//0,1,2,3,4,5

//Lo principal en una lista es DONDE SE GUARDA EN DATO?
//Un nodo es la forma de guardar un dato en una lista.

function nodo(valor){
    this.data = valor
    this.next = null 
}

function lista(){
    this.head = null
    this._length = 0;
}

lista.prototype.add = function(valor){
     let noditto = new nodo(valor);
     let current = this.head;

     if(!current){
        this.head = noditto;
        this._length++;
        return noditto;
   }
   while(current.next){
    current = current.next;
   }

   current.next = noditto;
   this._length++;
   return noditto;

}

let lista1 = new lista();
console.log(lista1._length);
console.log(lista1);

lista1.add(22);
console.log(lista1);
lista1.add(33);
console.log(lista1);
