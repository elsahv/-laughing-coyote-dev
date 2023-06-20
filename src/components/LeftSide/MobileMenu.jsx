const Hamburger = () => {
  return (
    <div className="bg-munsell w-full text-center md:hidden fixed top-0 border-black border-b-2">
      <h1 className="text-black text-2xl pt-3 pb-1">Laughing Coyote Dev</h1>
      <div className="flex justify-center mb-3">
        <a href="/#about" className="mx-3 px-1hover:text-cerulean">
          about
        </a>
        <a href="/#services" className="mx-3 px-1hover:text-cerulean">
          services
        </a>
        <a href="/#contact" className="mx-3 px-1hover:text-cerulean">
          contact
        </a>
      </div>
    </div>
  );
};

export default Hamburger;
