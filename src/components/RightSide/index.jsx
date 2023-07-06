import Tagline from "../Tagline";
import Grid from "./Grid";

const RightSide = () => {
  return (
    <section
      id="right-side"
      className="h-screen bg-onyx md:absolute relative right-0 md:w-3/5 w-full overflow-y-scroll overflow-x-hidden p-5"
    >
      <div className="md:mt-[150px] mt-2 2xl  :w-3/4 w-full mx-5 px-5">
        <div className="md:block hidden text-parchment">
          <Tagline />
        </div>
      </div>
      <Grid />
    </section>
  );
};

export default RightSide;
