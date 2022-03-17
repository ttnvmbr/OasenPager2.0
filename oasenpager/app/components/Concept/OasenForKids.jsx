export function OasenForKids() {
  return (
    <div className="w-screen h-screen absolute flex items-center justify-center z-30">
      <div className="flex flex-col w-full h-full justify-center items-center relative">
        <h1 className=" w-full oasenh1 flex justify-center p-0">Kids tour</h1>
        <div className="flex flex-col lg:flex-row items-center justify-center w-10/12 lg:px-10 2xl:p-0 max-h-full">
          <div className="h-52 md:h-72 lg:w-1/2  lg:max-h-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/uIdKT3sly2I"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <p className="p-4 m-4 lg:w-1/2">
            Het tweede idee dat we hebben uitgewerkt is “kidstour”. Dit idee is
            een interactieve tour voor kinderen tussen de 6 en 12 jaar oud waar
            ze op een leuke manier kunnen leren over bijvoorbeeld schoonwater en
            het waterzuiveringsproces. Dit idee komt voort uit de informatie dat
            Oasen ook een stuk educatie wil geven en hierbij de jongeren wil
            betrekken. Het concept is gebaseerd op interactieve spelletjes voor
            kinderen en virtual tours. De doelgroep waar we aandacht van willen
            trekken is de klanten van Oasen die kinderen hebben en online hun
            waterstanden doorgeven. Dit concept zal gelinkt worden op de website
            van Oasen het liefst op de pagina waar waterstanden worden
            doorgegeven omdat dit de meest bezochte pagina. De doelgroep die we
            daarna willen informeren is kinderen binnen de leeftijdsgroep 6 en
            12 die meer zouden willen leren over schoon en duurzaam water.
          </p>
        </div>
      </div>
    </div>
  );
}
