function Titulo() {
  const name = "Copchinito";
  if (name) {
    return <h1> Hola {name}</h1>;
  }
  return <h1>Hola Mundo</h1>;
}

export default Titulo;
