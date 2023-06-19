import Grid from "./Grid";

const RightSide = () => {
  return (
    <section className="h-screen bg-teal-200 absolute right-0 w-3/5 overflow-y-scroll p-5">
      <div className="mt-[150px] w-3/4 ml-5 pl-5">
        <span className=" text-3xl">
          Why should you prefer a custom-made website, when you can simply use
          wix or wordpress? Because a custom website fits your business,
          personality, goals... and you alone.
        </span>
      </div>
      <Grid />
    </section>
  );
};

export default RightSide;
