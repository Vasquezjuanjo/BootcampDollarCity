
function Nodo(ingreso){
    this.data = ingreso
    this.next = null 
}

function Compra(){
    this.head = null
    this.ingreso = 0;
}

Compra.prototype.add = function(ingreso){
     let tienda = new Nodo(ingreso);
     let current = this.head;

     if(!current){
        this.head = tienda;
        this.ingreso++;
        return tienda;
   }
   while(current.next){
    current = current.next;
   }

   current.next = tienda;
   this.ingreso++;
   return tienda;

}

function Producto(nombre,precio,cantidad){
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
}


let producto1 = new Producto("Arroz",1.5,3);
console.log(producto1);

let Compra1 = new Compra();
console.log(Compra1.ingreso);
console.log(Compra1);

Compra1.add(producto1);
console.log(Compra1);
