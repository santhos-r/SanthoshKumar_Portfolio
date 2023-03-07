import "./App.css";
import { NavBar, Home, About, Skills, Experience, Contact } from "./Components";
import { ThemeContext } from "./Context/Theme";
import { useContext } from "react";
import { ScrollToTop } from "./Components/Footer/ScrolltoTop";
// import { Contact, Experience, Home, NavBar, PersonalInfo, Skills } from "./Components";

function App() {

  const [{ themename }] = useContext(ThemeContext);

  return (
    <div id="top" className={`${themename} app`}>
      <NavBar />
      <main>
        {/* <Home /> */}
        {/* <About /> */}
        {/* <Skills /> */}
        {/* <Experience />*/}
        <Contact />
        {/* <ScrollToTop />  */}
      </main>
    </div>
  );
}

export default App;
