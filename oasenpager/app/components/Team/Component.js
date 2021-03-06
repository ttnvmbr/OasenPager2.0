export function Team() {
  return (
    <div className="w-screen h-screen absolute flex items-center justify-center z-30 flex-col">
      <h1 className="oasenh1 text-lg md:text-xl lg:text-3xl p-4">Het Team</h1>

      <div className="w-10/12 px-4  lg:w-1/2 max-w-screen-md  lg:p-0 flex justify-center mb-4">
        <img
          className="aspect-auto w-10/12 md:w-1/2"
          src="src/team.png"
          alt="het team"
        />
      </div>

      <div className="w-10/12 flex items-center text-center justify-center flex-col">
        <div className="flex mb-2 md:m-0 flex-nowrap flex-col md:flex-row	 font-strada text-xs md:text-lg">
          <p className="md:pr-2 font-bold text-blue-oasenDark">Lisa Keers</p>
          <a className="md:pr-2 text-blue-oasen" href="mailto:0986719@hr.nl">
            0986719@hr.nl
          </a>
          <p className="">Ontwikkelend en onderzoekend</p>
        </div>

        <div className="flex mb-2 md:m-0 flex-nowrap flex-col md:flex-row	 	 font-strada text-xs md:text-lg">
          <p className="md:pr-2 font-bold text-blue-oasenDark">
            Eva van der Kroft
          </p>
          <a className="md:pr-2 text-blue-oasen" href="mailto:0987164@hr.nl">
            0987164@hr.nl
          </a>
          <p className="">Ontwerpend en onderzoekend</p>
        </div>

        <div className="flex flex-nowrap mb-2 md:m-0 flex-col md:flex-row	 	font-strada text-xs md:text-lg">
          <p className="md:pr-2 font-bold text-blue-oasenDark"> Weifang Lei</p>
          <a className="md:pr-2 text-blue-oasen" href="mailto:0990142@hr.nl">
            0990142@hr.nl
          </a>
          <p className=""> Ontwerpend en onderzoekend</p>
        </div>

        <div className="flex flex-nowrap flex-col md:flex-row	 	 font-strada text-xs md:text-lg">
          <p className="md:pr-2 font-bold text-blue-oasenDark">
            Inci Yesiltepe
          </p>
          <a className="md:pr-2 text-blue-oasen" href="mailto:0986721@hr.nl">
            0986721@hr.nl
          </a>
          <p className=""> Ontwikkelend en betrokken</p>
        </div>
      </div>
    </div>
  );
}
