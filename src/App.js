import "./App.css";
import { Seccion1 } from "./components/seccion1";
import { Seccion2 } from "./components/seccion2";
import { Seccion3 } from "./components/seccion3";
import { Seccion4 } from "./components/seccion4";
import { Seccion5 } from "./components/seccion5";
import { Footer } from "./components/footer";

function App() {
  return (
    <div>
      <Seccion1 />
      <Seccion2 />
      <Seccion3 />
      <Seccion4 />
      <Seccion5 />
      <Footer /> 
      
    </div>
  );
}

export default App;
