import content from "./data";
import { MdFileOpen } from "react-icons/md";

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
            <div className="lg:px-5 px-1 hover:opacity-50" key={index}>
              <a href={item.url} target="_blank" rel="noreferrer">
                <div className="flex md:1/2 w-full text-2xl md:text-left text-center drop-shadow-lg p-2 border-0 md:mt-[100px] mt-0">
                  <h2 className="text-aquamarine">
                    {item.icon}
                    {item.title}
                  </h2>
                  <div className="pt-1 pl-2 text-aquamarine ">
                    <MdFileOpen />
                  </div>
                </div>
                <img
                  src={item.image}
                  alt=""
                  className="drop-shadow-lg border border-black"
                />
                <div className="text-parchment drop-shadow-lg p-2 flex justify-between">
                  <p>{item.paragraph1}</p>
                </div>
                <span>{item.icon}</span>
              </a>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};

export default Gallery;
