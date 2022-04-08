export function TweeDruppels() {
  return (
    <div className="w-screen h-screen absolute flex items-center justify-center z-30">
      <div className="flex flex-col w-full h-full justify-center items-center relative">
        <h1 className=" w-full oasenh1 flex justify-center p-4">
          Twee Druppels water
        </h1>
        <div className="flex flex-col items-center justify-center w-10/12 lg:px-10 2xl:p-0 max-h-full">
          <div className="w-10/12 md:w-1/2 max-w-screen-lg px-4 md:p-0">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/0vH9c9w8twQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="p-4 m-4 text-xs md:text-sm text-center max-w-screen-lg">
            'Twee druppels water' is een concept waarbij we ons voornamelijk
            focussen op het vergroten van het bewustzijn van de gebruiker over
            drinkwater en de meerwaarde van kraanwater (met name dat van Oasen),
            door de verschillen tegenover elkaar te zetten.We willen dit met dit
            concept bewerkstelligen door een extra slide toe te voegen aan de
            homepagina, waarmee de gebruiker op 4 verschillende manieren wordt
            geïnformeerd en hopelijk geïnteresseerd, op zowel visueel als
            interactief vlak. We gaan bij dit concept mee met het innovatieve
            karakter van Oasen door de druppels met 3D technologieën te
            weergeven.De doelgroep is bezoekers van de Oasen website
            (voornamelijk bewoners van het groene hart) met een interesse naar
            of een affiniteit met schoon, betaalbaar en duurzaam water.
          </p>
        </div>
      </div>
    </div>
  );
}
