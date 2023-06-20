import content from "./data";

const Services = () => {
  return (
    <div>
      <div className=" text-onyx">
        {/* //*LEFT SQ */}
        <section className="pt-[80px] border-r-2">
          <div className=" mb-[50px]">
            <h2 className="text-black font-bold text-2xl mb-5">
              So why should you bother with a website? What can a website do for
              your business?
            </h2>
            <div className="my-5">
              <p className="text-lg pl-1 py-2">
                -A website provides a platform for small businesses to showcase
                their products or services to a wider audience.
              </p>
              <p className="text-lg py-2">
                -Why should you prefer a custom-made website, when you can
                simply use wix or wordpress? Because a custom website fits your
                business, personality, goals... and you alone.
              </p>
              {/* <p className="text-lg pl-1 py-2">
              -Because each and every page and code was made with you in mind.
              Either you fit the website, or the website fits you!
            </p> */}
              {/* <p className="text-lg pl-1 py-2 pb-[50px]">
              -Laughing Coyote Dev was created to simplify the process of
              bringing your business online. Each site build comes with multiple
              services, leaving your more time to focus on your business
              instead!
            </p> */}
            </div>
          </div>
        </section>

        {/* //*RIGHT SQ */}
        <section className="">
          <div className="">
            <h2 className="font-bold text-onyx text-2xl mt-5 text-center underline ">
              Services Offered:
            </h2>
            <div className="grid 2xl:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1 py-5">
              {content.map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-black bg-parchment"
                >
                  <h3 className="text-lg text-center font-bold pt-3 px-3">
                    {item.title}
                  </h3>
                  <div className="flex justify-center py-2">
                    <img
                      src={item.image}
                      alt=""
                      id="border"
                      className="rounded-2xl w-16 p-3 bg-munsell border border-onyx"
                    />
                  </div>
                  <p className="text-md mt-5 px-2 pt-1 pb-3 text-md text-center">
                    {item.paragraph1}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
