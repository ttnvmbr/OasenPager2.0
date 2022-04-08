export function Choice() {
  return (
    <div className="w-screen h-screen absolute flex items-center justify-center z-30">
      <div className="flex flex-col w-full h-full justify-center items-center relative">
        <h1 className=" w-full oasenh1 flex justify-center p-4">
          Vervolgstappen
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center w-10/12 lg:px-10 2xl:p-0 max-h-full">
          <div className="flex justify-center md:items-center h-full">
            <img
              className="h-32 sm:h-48 md:h-62"
              src="src/vervolg.jpg"
              alt="vervolg"
            />
          </div>
          <p className="text-xs md:text-sm p-4 m-4 lg:w-1/2">
            Naar aanleiding van de keuze van Oasen zijn we aan de slag gegaan
            met het concept “twee druppels water”. Na de keuze voor dit concept
            hebben we de feedback vanuit Oasen in punten genoteerd zodat we de
            nodige onderwerpen konden onderzoeken. We hebben vervolgens een
            onderzoek uitgevoerd naar bijvoorbeeld de technologie die we wilden
            gebruiken. Zo zijn we erachter gekomen dat de Oasen website gemaakt
            is met de library React en hebben we ervoor gekozen ons project ook
            te ontwikkelen met React. Daarnaast hebben we gekeken naar three.js
            voor het 3D effect van de druppels en hebben we deze gemodelleerd in
            Blender. Ook hebben we onderzoek gedaan voor de content en hier
            hebben we interviews voor opgesteld en uitgevoerd. Het doel van de
            interviews was om er achter te komen welke onderwerpen rond water
            interessant zijn voor de doelgroep. Zo zijn onderwerpen als
            waterkwaliteit en water besparen naar voren gekomen en hebben we dit
            in de content geïmplementeerd. Met al deze informatie en kennis zijn
            we begonnen met het coderen en ontwikkelen.
          </p>
        </div>
      </div>
    </div>
  );
}
