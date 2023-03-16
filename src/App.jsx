import "./App.css";
import { Home, About, Skills, NavBar, Experience, Contact } from "./Components";
import { ThemeContext } from "./Context/Theme";
import { useContext, useEffect } from "react";
import { ScrollToTop } from "./Components/Footer/ScrolltoTop";
import Aos from "aos";
import "aos/dist/aos.css";
// import { Contact,  Home, NavBar, PersonalInfo, Skills } from "./Components";

function App() {

  const [{ themename }] = useContext(ThemeContext);
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div id="top" className={`${themename} app`}>
      <NavBar />
      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Contact />
        <ScrollToTop />
      </main>
    </div>
  );
}

export default App;
