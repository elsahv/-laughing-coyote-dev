import content from "./data";

const Work = () => {
  return (
    <div className="pt-[180px]">
      <h2 className="text-3xl font-bold">About</h2>
      <p>how it works!</p>
      {content.map((item, index) => (
        <div key={index}>
          <h2 className="font-bold">{item.title}---</h2>
          <img src={item.image} alt="" />
          <p>{item.paragraph1}</p>
          <p>{item.paragraph2}</p>
          <p>{item.paragraph3}</p>
        </div>
      ))}
    </div>
  );
};

export default Work;
