export function Proces() {
  return (
    <div className="w-screen h-screen absolute flex items-center justify-center z-30">
      <div className="flex flex-col w-full h-full justify-center items-center relative">
        <h1 className=" w-full oasenh1 flex justify-center p-0">Ontwerpen</h1>
        <div className="flex flex-col lg:flex-row items-center justify-center w-10/12 lg:px-10 2xl:p-0 max-h-full">
          <div className="h-52 md:h-72 lg:w-1/3  lg:max-h-full">
            <img className="w-full h-full" src="src/concept.jpg" alt="" />
          </div>
          <p className="p-4 m-4 lg:w-2/3">
            We zijn begonnen met conceptualiseren door middel van “Crazy 8s”.
            Dit is een ontwerpmethode waarbij we zo snel mogelijk ideeën hebben
            bedacht en genoteerd met schetsen. Hierna hebben we deze ideeën in
            de groep besproken, gemixt om tot gemengde ideeën te komen en daarna
            gestemd op de beste ideeën. De meest gestemde ideeën hebben we
            verder uitgewerkt in storyboards en zo zijn we tot 3 concepten
            gekomen waarmee we verder zijn gegaan. Deze concepten hebben we kort
            samengevat in “accessible overlay”, “kidstour” en “2 druppels”.
          </p>
        </div>
      </div>
    </div>
  );
}
