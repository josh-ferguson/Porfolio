import Topbar from "./components/topbar/Topbar";
import Home from "./components/home/Home";
import Intro from "./components/intro/Intro";
import Education from "./components/education/Education";
import Portfolio from "./components/porfolio/Porfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Home />
        <Intro />
        <Education />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
