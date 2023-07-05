import About from "./components/LeftSide/About";
import ServicesInfo from "./components/LeftSide/ServicesInfo";
import Contact from "./components/LeftSide/Contact";
import RightSide from "./components/RightSide/index.jsx";
import MobileMenu from "./components/LeftSide/MobileMenu";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

function App() {
  return (
    <div className="flex md:flex-row flex-col">
      <section
        id="left-side"
        className="bg-parchment md:h-screen h-full md:absolute relative md:left-0 sm:bottom-0 md:w-2/5 w-full overflow-y-scroll"
      >
        <MobileMenu />
        {/* //todo: CHAKRA*/}
        <Tabs>
          <TabList>
            <div className="md:block hidden px-5 2xl:pt-0 md:pt-[50px]">
              <h1 className="text-black 2xl:text-[105px] md:text-6xl text-5xl py-5">
                Laughing Coyote Dev
              </h1>

              <div className="border-black border-y-2 pl-5 text-2xl py-5 mr-5 l text-onyx justify-start">
                <Tab>about</Tab>
                <Tab>Services</Tab>
                <Tab>Contact</Tab>
              </div>
            </div>
          </TabList>

          <div className="lg:px-5 lg:mx-5 md:px-3 md:mx-3 px-2 mx-2 snap-y snap-mandatory overflow-scroll z-0">
            <TabPanels>
              <TabPanel>
                <div id="about" className="my-5 snap-start">
                  <About />
                </div>
              </TabPanel>
              <TabPanel>
                <div id="services" className="my-5 snap-center">
                  <ServicesInfo />
                </div>
              </TabPanel>
              <TabPanel>
                <div id="contact" className="my-5 snap-center">
                  <Contact />
                </div>
              </TabPanel>
            </TabPanels>
          </div>
        </Tabs>
      </section>
      <RightSide />
    </div>
  );
}

export default App;
