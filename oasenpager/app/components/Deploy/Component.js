export function Deploy() {
  return (
    <div className="w-screen h-screen absolute flex items-center justify-center z-30 flex-col">
      <h1 className="oasenh1 text-lg md:text-xl lg:text-3xl text-center pb-4 md:pb-0">
        Doorontwikkelingsmogelijkheden
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-center w-10/12 lg:px-10 2xl:p-0 max-h-full">
        <div className="flex justify-center md:items-center h-full">
          <ul className="list-none text-blue-oasen">
            <li className="flex items-center pb-2">
              <span
                className="iconify text-xl mr-2"
                data-icon="fa6-solid:droplet"
              ></span>
              <p>Mobiele stijling toevoegen</p>
            </li>
            <li className="flex items-center pb-2 ">
              <span
                className="iconify text-xl mr-2"
                data-icon="fa6-solid:droplet"
              ></span>
              <p>Meerdere tips en quizvragen toevoegen</p>
            </li>
            <li className="flex items-center pb-2 ">
              <span
                className="iconify text-xl mr-2"
                data-icon="fa6-solid:droplet"
              ></span>
              <p>Nieuwe content video’s maken</p>
            </li>
            <li className="flex items-center pb-2 ">
              <span
                className="iconify text-xl mr-2"
                data-icon="fa6-solid:droplet"
              ></span>
              <p>Mogelijkheid tot accessible versie</p>
            </li>
            <li className="flex items-center">
              <span
                className="iconify text-xl mr-2"
                data-icon="fa6-solid:droplet"
              ></span>
              <p>Simpele informatie weergeven</p>
            </li>
          </ul>
        </div>
        <p className="text-xs md:text-sm p-4 m-4 lg:w-1/2 text-center lg:text-left">
          Omdat het eindproduct nu nog het minimum viable product is staan er
          nog een aantal punten open waarvan we denken dat het product verbeterd
          zou kunnen worden als deze worden toegevoegd. We zien
          doorontwikkelingsmogelijkheden in het toevoegen van zowel de mobiele
          styling als meerdere tips en quizvragen. Ook zien wij een extra waarde
          in het vervangen van de huidige stock video’s met zelfgemaakte,
          relevante video’s. Daarnaast zou het product kunnen worden verbeterd
          door deze accessible te maken en als laatst zou de informatie en
          visuals versimpeld kunnen worden zodat het ook toegankelijk is voor
          kinderen.
        </p>
      </div>
      <script src="https://code.iconify.design/2/2.1.2/iconify.min.js"></script>
    </div>
  );
}
