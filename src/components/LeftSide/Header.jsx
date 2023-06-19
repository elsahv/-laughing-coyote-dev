const Header = () => {
  return (
    <div className="px-5 bg-orange-900">
      <h1 className="text-[105px] py-5">Laughing Coyote Dev</h1>
      <div className="border-black border-y-2 pl-5 text-2xl py-5 mr-5 flex flex-col">
        <a href="/#about">about</a>
        <a href="/#services">services</a>
        <a href="/#contact">contact</a>
      </div>
      <div className="p-5 mt-5 mr-5"></div>
    </div>
  );
};

export default Header;
