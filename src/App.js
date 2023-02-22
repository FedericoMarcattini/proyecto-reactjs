import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import Button from "react-bootstrap/esm/Button";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Navbar/>

      <ItemListContainer greeting="Proyecto de Federico Marcattini"/>

      <div className="container">

        <Button>Click Aqui</Button>

      </div>
    </div>
  );
}

export default App;

