import Grid from "./Grid";

const RightSide = () => {
  return (
    <section
      id="right-side"
      className="h-screen bg-onyx absolute right-0 w-3/5 overflow-y-scroll p-5"
    >
      <div className="mt-[150px] w-3/4 mx-5 px-5">
        <span className="text-parchment text-3xl">
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
