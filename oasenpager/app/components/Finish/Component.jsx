export function Finish() {
  return (
    <div className="w-screen h-screen absolute flex items-center justify-center z-30">
      <div className="flex flex-col w-full h-full justify-center items-center relative">
        <h1 className=" w-full oasenh1 flex justify-center p-4">Eindproduct</h1>
        <div className="flex flex-col items-center justify-center w-10/12 lg:px-10 2xl:p-0 max-h-full">
          <div className=" w-10/12 md:w-1/2 max-w-screen-sm flex justify-center md:items-center h-full">
            <iframe
              src="https://drive.google.com/file/d/1qVb6wy-P2ZlCt2cWRaegfPbIN7dh_Zsz/preview"
              className="w-full aspect-video"
              allow="autoplay"
            ></iframe>
          </div>
          <div className="lg:w-1/2 p-4 m-4 flex justify-center flex-col">
            <p className="text-xs md:text-sm pb-4 text-center">
              Ons eindproduct voor nu is het minimum viable product oftewel een
              sterk prototype met alle belangrijke functionaliteiten. Het
              concept is niet veel veranderd van het oorspronkelijke idee om een
              slide op de homepage toe te voegen. Hierin komt weer duidelijk de
              vergelijking van de wereld van Oasen drinkwater en de wereld van
              het commerciële drinkwater naar boven, om bewustzijn te creëren
              bij de gebruiker op een interactieve manier met 3D technologie.
            </p>
            <div className="flex w-full justify-center">
              <a
                href="https://tweedruppelswater.netlify.app/"
                className="w-44 h-10 bg-blue-oasenDark hover:bg-blue-oasen text-white text-center flex justify-center items-center bold rounded-3xl text-xl"
              >
                Bekijk de demo
              </a>
              <a
                href="https://github.com/Wazup2You/AlsTweeDruppelsWater"
                className="w-44 ml-4 h-10 bg-blue-oasenDark hover:bg-blue-oasen text-white text-center flex justify-center items-center bold rounded-3xl text-xl"
              >
                Bekijk de code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
