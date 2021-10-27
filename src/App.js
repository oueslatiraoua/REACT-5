import "./App.css";
import FigureImage from "react-bootstrap/FigureImage";
import Figure from "react-bootstrap/Figure";
import Presentation from "./Profile/Presentation";

import image from "./image.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

import Handle from "./Profile/Handle";

function App() {
  return (
    <div className="App">
      <Presentation
        Name="Raoua Oueslati"
        Profession="Civil Engineer"
        Bio="Web Developer,love programming"
      >
        <br />
        <br />
        <div>
          <Figure className="Fg">
            <Figure.Image width={150} height={70} alt="150x150" src={image} />
          </Figure>
        </div>
        <Handle Name="Raoua Oueslati"></Handle>
      </Presentation>
    </div>
  );
}

export default App;
