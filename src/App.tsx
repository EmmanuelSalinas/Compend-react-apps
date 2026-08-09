import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [list, setList] = useState(["Naruto", "Goku", "Saitama"]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const handleSelect = (element: string) => {
    console.log(element);
  };
  const handleClick = () => {
    setIsLoading(!isLoading);
    setList((prev) => [...prev, "Miniom"]);
    setTimeout(() => {
      setIsLoading(isLoading);
    }, 1000);
  };
  const handleClick2 = () => {
    setIsLoadingDelete(!isLoadingDelete);
    setList((prev) => prev.slice(0, -1));
    setTimeout(() => {
      setIsLoadingDelete(isLoadingDelete);
    }, 1000);
  };
  const handleSelect2 = (element: string) => {
    console.log("Segundo handle: ", element);
  };

  /* return <CardBody title={"Hola mundo"} text={"El texto del componente."} />; */
  return (
    <Card>
      <CardBody title={"Hola mundo"} text={"El texto del componente."} />
      {list.length !== 0 ? (
        <List data={list} onSelect={handleSelect} />
      ) : (
        "No hay contenido"
      )}
      <Button isLoading={isLoading} onClicked={handleClick}>
        Agregar
      </Button>
      <Button isLoading={isLoadingDelete} onClicked={handleClick2}>
        Eliminar
      </Button>

      {/* <List data={list} onSelect={handleSelect2} /> */}
    </Card>
  );
}

export default App;
