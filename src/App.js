import "./App.css";
import { Seccion1 } from "./Section/Section1/seccion1";
import { Seccion2 } from "./Section/Section2/seccion2";
import { Seccion3 } from "./Section/Section3/seccion3";
import { Seccion4 } from "./Section/Section4/seccion4";
import { Seccion5 } from "./components/seccion5";
import Footer from "./Footer/footer";


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
