import Header from "./Header";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

const LeftSide = () => {
  return (
    <section className="h-screen bg-teal-700  w-2/5 overflow-y-scroll">
      <Header />
      <div className="bg-orange-300 px-5 mx-5">
        <div className="my-5 absolute left-0 z-10">
          <About />
        </div>
        <div className="my-5">
          <Services />
        </div>
        <div className="my-5">
          <Contact />
        </div>
      </div>
    </section>
  );
};

export default LeftSide;
