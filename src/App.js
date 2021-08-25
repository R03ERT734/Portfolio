import "./Styles/App.css";
import "./Styles/Button.css";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
