import About from "./About";
import ServicesInfo from "./ServicesInfo";
import Contact from "./Contact";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const index = () => {
  return (
    <section
      id="left-side"
      className="bg-parchment md:h-screen h-full md:absolute relative md:left-0 sm:bottom-0 md:w-2/5 w-full overflow-y-scroll overflow-x-hidden"
    >
      <Tabs>
        <TabList>
          <nav className="px-5 2xl:pt-0 md:pt-[50px]">
            <h1 className="text-black 2xl:text-[105px] md:text-6xl text-5xl py-5">
              Laughing Coyote Dev
            </h1>
            <div className="border-black border-y-2 pl-5 text-2xl py-5 mr-5 l text-onyx justify-start">
              <Tab>About</Tab>
              <Tab>Services</Tab>
              <Tab>Contact</Tab>
              <a href="/#right-side" className="md:hidden block">
                Featured Works
              </a>
            </div>
          </nav>
        </TabList>
        <div className="lg:px-5 lg:mx-5 md:px-3 md:mx-3 px-2 mx-2 snap-y snap-mandatory z-0 md:block hidden">
          <TabPanels>
            <TabPanel>
              <About />
            </TabPanel>
            <TabPanel>
              <ServicesInfo />
            </TabPanel>
            <TabPanel>
              <Contact />
            </TabPanel>
          </TabPanels>
        </div>
      </Tabs>

      {/* MOBILE SECTIONS */}
      <div className="md:hidden block px-5">
        <About />
        <ServicesInfo />
        <Contact />
      </div>
    </section>
  );
};

export default index;
