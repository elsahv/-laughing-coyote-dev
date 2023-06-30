const Header = () => {
  return (
    <div className="md:block hidden px-5 2xl:pt-0 md:pt-[50px]">
      <h1 className="text-black 2xl:text-[105px] md:text-6xl text-5xl py-5">
        Laughing Coyote Dev
      </h1>
      <div className="border-black border-y-2 pl-5 text-2xl py-5 mr-5 flex flex-col text-onyx">
        <a href="/#about" className="hover:text-cerulean">
          about
        </a>
        <a href="/#services" className="hover:text-cerulean">
          services
        </a>
        <a href="/#contact" className="hover:text-cerulean">
          contact
        </a>
      </div>
      <div className="p-5 mt-5 mr-5"></div>
    </div>
  );
};

export default Header;
