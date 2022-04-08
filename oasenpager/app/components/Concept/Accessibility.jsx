export function Accessibility() {
  return (
    <div className="w-screen h-screen absolute flex items-center justify-center z-30">
      <div className="flex flex-col w-full h-full justify-center items-center relative">
        <h1 className=" w-full oasenh1 flex justify-center p-4">
          Accessibility
        </h1>
        <div className="flex flex-col items-center justify-center w-10/12 lg:px-10 2xl:p-0 max-h-full">
          <div className="w-10/12 max-w-screen-lg  px-4 md:p-0">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/dOWhWAwQZNU"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="p-4 m-4 text-xs md:text-sm text-center max-w-screen-lg">
            Ons eerste concept is “accessible overlay”, dit is het idee om een
            volledig accessible, versimpelde versie van de huidige website te
            maken zodat ook gebruikers die minder toegankelijk zijn toegang
            hebben tot de website en andere gebruikers een snelle mogelijkheid
            hebben om op de belangrijke pagina te komen en belangrijke
            informatie te zien. Dit idee komt voort uit dat de huidige website
            niet toegankelijk is en er veel informatie staat die niet wordt
            gevonden omdat er echt heel veel informatie te vinden is op de
            website dus het kan moeilijk zijn om de specifieke info te vinden.
            De doelgroep voor dit concept is mensen met een visuele, motorische
            en of intellectuele beperking die op een makkelijk manier de
            belangrijkste pagina’s willen bereiken.
          </p>
        </div>
      </div>
    </div>
  );
}
