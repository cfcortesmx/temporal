import App from '../src/main';

test('obtenerSuma()', () => {
  let myApp = new App();
  let inicio = [7, 10, 15];
  let fin = [17, 20, 25];
  let resultado = [96, 120, 142];

  for (let i = 0; i < inicio.length; i++) {
    expect(myApp.obtenerSuma(inicio[i], fin[i])).toBe(resultado[i]);
  }
});
