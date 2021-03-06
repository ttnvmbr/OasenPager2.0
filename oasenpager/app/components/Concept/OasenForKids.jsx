export function OasenForKids() {
  return (
    <div className="w-screen h-screen absolute flex items-center justify-center z-30">
      <div className="flex flex-col w-full h-full justify-center items-center relative">
        <h1 className=" w-full oasenh1 flex justify-center p-4">Kids tour</h1>
        <div className="flex flex-col items-center justify-center w-10/12 lg:px-10 2xl:p-0 max-h-full">
          <div className="w-10/12 md:w-1/2 max-w-screen-lg  px-4 md:p-0">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/uIdKT3sly2I"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="p-4 m-4 text-xs md:text-sm text-center  max-w-screen-lg">
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
