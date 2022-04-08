export function Footer() {
  return (
    <div className="bg-blue-oasen shadow flex items-center justify-center oasenwhite flex-col w-screen pb-20">
      <h1 className="oasenwhite p-10">Links</h1>
      <footer className="">
        <ul className="flex items-center justify-center">
          <li className="md:mr-16 mr-8 md:w-14 w-10">
            <a
              href="https://github.com/Wazup2You/AlsTweeDruppelsWater"
              className="oasenwhite hover:text-black duration-500 "
            >
              <span
                className="iconify text-5xl md:text-6xl"
                data-icon="akar-icons:github-fill"
              ></span>
            </a>
          </li>
          <li className="md:mr-16 mr-8 md:w-14 w-10">
            <a
              href="https://drive.google.com/drive/folders/1uZCHfjTIz8cmt0zEgQ1uTVwbofFVHuca?usp=sharing"
              className="text-xl oasenwhite hover:text-black duration-500"
            >
              <span
                className="iconify  text-5xl md:text-6xl"
                data-icon="entypo-social:google-drive"
              ></span>
            </a>
          </li>
          <li className="md:mr-16 mr-8 md:w-14 w-10">
            <a
              href="https://trello.com/b/gJG5AL7e/oasen"
              className="text-xl oasenwhite hover:text-black duration-500"
            >
              <span
                className="iconify text-6xl md:text-7xl"
                data-icon="bxl:trello"
              ></span>
            </a>
          </li>
          <li className="md:w-14 w-10">
            <a
              href="https://miro.com/app/board/uXjVOOvpQPQ=/"
              className="text-xl oasenwhite hover:text-black duration-500"
            >
              <span
                className="iconify text-4xl md:text-6xl"
                data-icon="simple-icons:miro"
              ></span>
            </a>
          </li>
        </ul>
        <script src="https://code.iconify.design/2/2.1.2/iconify.min.js"></script>
      </footer>
    </div>
  );
}
