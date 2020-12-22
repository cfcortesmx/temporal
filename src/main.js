export default class App {
  obtenerMayor(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }

  obtenerMenor(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

  esPar(numero) {
    if (numero % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  factorial(numero) {
    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
      factorial = factorial * i;
    }

    return factorial;
  }

  contarPares(a, b) {
    let inicio = this.obtenerMenor(a, b);
    let fin = this.obtenerMayor(a, b);
    let pares = 0;

    for (let i = inicio; i <= fin; i++) {
      if (this.esPar(i)) {
        pares++;
      }
    }

    return pares;
  }

  obtenerSuma(numero) {
    let suma = 0;

    for (let i = 0; i <= numero; i++) {
      suma = suma + i / this.factorial(i);
    }

    return suma;
  }
}

let app = new App();
