import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App bg-transparent">
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
