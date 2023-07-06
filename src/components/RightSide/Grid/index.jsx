import content from "./data";

const Gallery = () => {
  return (
    <div id="gallery" className="pt-5 pb-[100px]">
      <section className="flex flex-col pb-[150px]">
        <div className="mb-5 w-full pl-5 pb-3">
          <h2 className="md:hidden block font-bold text-3xl text-center text-parchment">
            Featured Websites
          </h2>
        </div>

        <section className="mt-5 pt-5 md:px-3 px-1 grid 2xl:grid-cols-2 sm:grid-cols-1 gap-5">
          {content.map((item, index) => (
            <div className="lg:px-5 px-1" key={index}>
              <a href={item.url}>
                <h2 className="text-2xl md:text-left text-center text-aquamarine drop-shadow-lg p-2 border-0 md:mt-[100px] mt-0">
                  ({item.id}) {item.title}
                </h2>
                <img
                  src={item.image}
                  alt=""
                  className="drop-shadow-lg border border-black"
                />
                <p className="text-parchment drop-shadow-lg p-2">
                  {item.paragraph1}
                </p>
              </a>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};

export default Gallery;
