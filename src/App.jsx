import Header from "./components/LeftSide/Header";
import About from "./components/LeftSide/About";
import ServicesInfo from "./components/LeftSide/ServicesInfo";
import Contact from "./components/LeftSide/Contact";
import RightSide from "./components/RightSide/index.jsx";

function App() {
  return (
    <div className="flex">
      <section
        id="left-side"
        className="bg-parchment h-screen absolute left-0 w-2/5 overflow-y-scroll"
      >
        <Header />

        <div className="px-5 mx-5">
          <div id="about" className="my-5">
            <About />
          </div>

          <div id="services" className="my-5">
            <ServicesInfo />
          </div>

          <div id="contact" className="my-5">
            <Contact />
          </div>
        </div>
      </section>
      <RightSide />
    </div>
  );
}

export default App;
