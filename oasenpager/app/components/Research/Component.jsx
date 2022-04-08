export function Research() {
  return (
    <div className="w-screen h-screen absolute flex items-center justify-center z-30">
      <div className="flex flex-col w-full h-full justify-center items-center relative">
        <h1 className=" w-full oasenh1 flex justify-center p-4">Onderzoek</h1>
        <div className="flex flex-col items-center justify-center w-10/12 lg:px-10 2xl:p-0 max-h-full">
          <div className="flex justify-center md:items-center w-1/2 max-w-screen-md">
            <img
              className="md:w-[27.75%] w-[55.5%] aspect-auto"
              src="src/brainstorm.jpg"
              alt="brainstorm"
            />
            <img
              className="md:w-1/2 w-full aspect-auto"
              src="src/inspoinsight.jpg"
              alt="inspiratie en inzichten"
            />
          </div>
          <p className="text-xs md:text-sm p-4 m-4 w-10/12 text-center max-w-screen-lg">
            Om te beginnen bij het proces hebben we na het bezoek aan Oasen een
            aantal belangrijke punten opgeschreven en hebben vanuit daar een
            uitgebreide brainstormsessie gehouden. Dit houd in dat we aan de
            slag zijn gegaan met onderwerpen waar mogelijk meer uit te halen
            valt, kijkende naar een innovatieve gimmick. We hebben dit
            gesorteerd op de termen “vertrouwen, wow-factor, bewustwording en
            toegankelijkheid”. We hebben een uitgebreid bronnenonderzoek
            uitgevoerd gebaseerd op de onderwerpen die ons trokken bij de
            brainstormsessie. Hieruit is gebleken dat we voornamelijk interesse
            hebben naar de aanpak van accessibility, mogelijke vernieuwende
            technologieën, het water proces en het weergeven van statistieken.
            Uit het bronnenonderzoek hebben we een aantal insights gehaald,
            waaronder dat de website niet toegankelijk is voor assistive tech,
            dat klanten het vanzelfsprekend vinden dat er schoon water uit de
            kraan komt en dat de website van Oasen veel technologie heeft wat
            niet specifiek bruikbaar is voor de bezoeker.
          </p>
        </div>
      </div>
    </div>
  );
}
