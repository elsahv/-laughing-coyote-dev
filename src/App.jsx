import Header from "./components/LeftSide/Header";
import About from "./components/LeftSide/About";
import ServicesInfo from "./components/LeftSide/ServicesInfo";
import Contact from "./components/LeftSide/Contact";
import RightSide from "./components/RightSide/index.jsx";
import MobileMenu from "./components/LeftSide/MobileMenu";

function App() {
  return (
    <div className="flex md:flex-row flex-col">
      <section
        id="left-side"
        className="bg-parchment md:h-screen h-full md:absolute relative md:left-0 sm:bottom-0 md:w-2/5 w-full overflow-y-scroll"
      >
        <Header />
        <MobileMenu />
        <div className="lg:px-5 lg:mx-5 md:px-3 md:mx-3 px-2 mx-2 snap-y snap-mandatory overflow-scroll z-0">
          <div id="about" className="my-5 snap-start">
            <About />
          </div>
          <div id="services" className="my-5 snap-center">
            <ServicesInfo />
          </div>

          <div id="contact" className="my-5 snap-center">
            <Contact />
          </div>
        </div>
      </section>
      <RightSide />
    </div>
  );
}

export default App;
