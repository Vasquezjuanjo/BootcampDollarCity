function ArbolBinario(valor){
    this.valor = valor;
    this.derecha = null;
    this.izquierda = null;
}


ArbolBinario.prototype.insertar = function(dato){
    if(dato > this.valor){
        if(this.derecha !== null){
            this.derecha.insertar(dato);
        }else{
            this.derecha = new ArbolBinario(dato);
        }
    }


if(dato < this.valor){
    if(this.izquierda !== null){
        this.izquierda.insertar(dato);
    }else{
        this.izquierda = new ArbolBinario(dato);
    }
}
}
let arbolito = new ArbolBinario(47);
console.log(arbolito);

arbolito.insertar(14);
console.log(arbolito);
arbolito.insertar(9);
console.log(arbolito);