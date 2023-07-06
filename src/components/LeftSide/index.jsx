import About from "./About";
import ServicesInfo from "./ServicesInfo";
import Contact from "./Contact";
import MobileMenu from "./MobileMenu";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const index = () => {
  return (
    <section
      id="left-side"
      className="bg-parchment md:h-screen h-full md:absolute relative md:left-0 sm:bottom-0 md:w-2/5 w-full overflow-y-scroll overflow-x-hidden"
    >
      <MobileMenu />
      <Tabs>
        <TabList>
          <header className="md:block hidden px-5 2xl:pt-0 md:pt-[50px]">
            <h1 className="text-black 2xl:text-[105px] md:text-6xl text-5xl py-5">
              Laughing Coyote Dev
            </h1>
            <div className="border-black border-y-2 pl-5 text-2xl py-5 mr-5 l text-onyx justify-start">
              <Tab>About</Tab>
              <Tab>Services</Tab>
              <Tab>Contact</Tab>
            </div>
          </header>
        </TabList>

        <div className="lg:px-5 lg:mx-5 md:px-3 md:mx-3 px-2 mx-2 snap-y snap-mandatory overflow-scroll z-0">
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
    </section>
  );
};

export default index;
