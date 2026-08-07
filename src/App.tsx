import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["Goku", "Naruto", "Tanjiro"];

  const handleSelect = (element: string) => {
    console.log(element);
  };
  const handleSelect2 = (element: string) => {
    console.log("Segundo handle: ", element);
  };

  /* return <CardBody title={"Hola mundo"} text={"El texto del componente."} />; */
  return (
    <Card>
      <CardBody title={"Hola mundo"} text={"El texto del componente."} />
      <List data={list} onSelect={handleSelect} />
      <List data={list} onSelect={handleSelect2} />
    </Card>
  );
}

export default App;
