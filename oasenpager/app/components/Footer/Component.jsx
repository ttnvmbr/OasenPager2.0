export function Footer() {
  return (
    <div className="bg-blue-oasen shadow flex items-center justify-center oasenwhite flex-col w-screen pb-20">
      <h1 className="oasenwhite p-10">Links</h1>
      <footer className="">
        <ul className="md:flex md:items-center">
          <li className="mr-16">
            <a
              href="https://github.com/ttnvmbr/OasenPager2.0"
              className="text-xl oasenwhite hover:text-black duration-500"
            >
              <ion-icon name="logo-github" className="text-6xl"></ion-icon>
            </a>
          </li>
          <li className="mr-16">
            <a
              href="https://drive.google.com/drive/folders/1uZCHfjTIz8cmt0zEgQ1uTVwbofFVHuca?usp=sharing"
              className="text-xl oasenwhite hover:text-black duration-500"
            >
              <span
                className="iconify text-6xl"
                data-icon="entypo-social:google-drive"
              ></span>
            </a>
          </li>
          <li className="mr-16">
            <a
              href="https://trello.com/b/gJG5AL7e/oasen"
              className="text-xl oasenwhite hover:text-black duration-500"
            >
              <span className="iconify text-6xl" data-icon="bxl:trello"></span>
            </a>
          </li>
          <li className="">
            <a
              href="https://miro.com/app/board/uXjVOOvpQPQ=/"
              className="text-xl oasenwhite hover:text-black duration-500"
            >
              <span
                className="iconify text-6xl"
                data-icon="simple-icons:miro"
              ></span>
            </a>
          </li>
        </ul>
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
        <script src="https://code.iconify.design/2/2.1.2/iconify.min.js"></script>
      </footer>
    </div>
  );
}
