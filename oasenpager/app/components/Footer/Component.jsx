export function Footer() {
  return (
    <div className="bg-blue-oasen shadow flex items-center justify-center oasenwhite flex-col w-screen pb-20">
      <h1 className="oasenwhite p-10">Links</h1>
      <footer className="">
        <ul className="flex items-center justify-center">
          <li className="md:mr-16 mr-8 md:w-14 w-10">
            <a
              href="https://github.com/ttnvmbr/OasenPager2.0"
              className="oasenwhite hover:text-black duration-500 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li className="md:mr-16 mr-8 md:w-14 w-10">
            <a
              href="https://drive.google.com/drive/folders/1uZCHfjTIz8cmt0zEgQ1uTVwbofFVHuca?usp=sharing"
              className="text-xl oasenwhite hover:text-black duration-500"
            >
              <span
                className="iconify  text-5xl md:text-6xl"
                dataicon="entypo-social:google-drive"
              ></span>
            </a>
          </li>
          <li className="md:mr-16 mr-8 md:w-14 w-10">
            <a
              href="https://trello.com/b/gJG5AL7e/oasen"
              className="text-xl oasenwhite hover:text-black duration-500"
            >
              <span
                className="iconify text-5xl md:text-6xl"
                dataicon="bxl:trello"
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
                dataicon="simple-icons:miro"
              ></span>
            </a>
          </li>
        </ul>
        <script src="https://code.iconify.design/2/2.1.2/iconify.min.js"></script>
      </footer>
    </div>
  );
}
