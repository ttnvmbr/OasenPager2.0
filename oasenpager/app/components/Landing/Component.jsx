export function Landing() {
  return (
    <div className="w-screen h-screen absolute flex items-center justify-center z-30 flex-col">
      <h1 className="oasenh1 text-lg md:text-xl lg:text-3xl">
        Oasen gimmick door team W&W
      </h1>
      <a
        href="https://tweedruppelswater.netlify.app/"
        className="w-44 h-10 bg-blue-oasenDark p-4 m-4 hover:bg-blue-oasen text-white text-center flex justify-center items-center bold rounded-3xl text-xl"
      >
        Bekijk de demo!
      </a>
    </div>
  );
}
