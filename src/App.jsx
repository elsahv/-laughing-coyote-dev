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
