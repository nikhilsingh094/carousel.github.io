import "./App.css";
import Caroussel from "./component/Caroussel";
import One from "./assets/1.jpg";
import Two from "./assets/2.jpg";
import Three from "./assets/3.jpeg";
import Four from "./assets/4.jpeg";
import Five from "./assets/5.jpg";

function App() {
  return (
    <div className="app">
      <Caroussel>
        <img src={One} />
        <img src={Two} />
        <img src={Three} />
        <img src={Four} />
        <img src={Five} />
      </Caroussel>
    </div>
  );
}

export default App;
