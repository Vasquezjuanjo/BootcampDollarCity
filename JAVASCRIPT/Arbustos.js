class Familia {
    constructor(miembros, valor) {
      this.miembros = miembros;
      this.valor = valor;
      this.padre = null;
      this.madre = null;
    }
  
    insertar(dato) {
      if (dato > this.valor) {
        if (this.padre !== null) {
          this.padre.insertar(dato);
        } else {
          this.padre = new Familia([], dato);
        }
      }
      if (dato < this.valor) {
        if (this.madre !== null) {
          this.madre.insertar(dato);
        } else {
          this.madre = new Familia([], dato);
        }
      }
    }
  }
  
  class Pariente {
    constructor(Nombre, Edad, ClaseDF) {
      this.Nombre = Nombre;
      this.Edad = Edad;
     this.ClaseDF = ClaseDF;
    }
  }
  
  // Ejemplo de uso
  const integrante = new Familia([], 33);
  console.log(integrante);
  
  integrante.insertar(42);
  console.log(integrante);
  
  integrante.insertar(25);
  console.log(integrante);
  
  const datosdelpariente1 = new Pariente('Juan', 25, 'Hijo prodigo');
  integrante.miembros.push(datosdelpariente1);
  
  const datosdelpariente2 = new Pariente('María', 41, 'Tia regañona');
  integrante.miembros.push(datosdelpariente2);
  
  console.log(integrante);