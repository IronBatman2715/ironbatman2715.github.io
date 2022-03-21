function Header(props) {
  return {
    $template: `<div>
        <a href="../">
          <img :src="icons.home" alt="Website icon" />
          <p>IronBatman2715.GitHub.io</p>
        </a>
        <a class="tooltip-container" href="https://github.com/IronBatman2715/" target="_blank">
          <img :src="icons.github" alt="Github" />
          <span>GitHub</span>
        </a>
        <!--<a class="tooltip-container" href="" target="_blank">
          <img :src="icons.discord" alt="Discord" />
          <span>Discord</span>
        </a>-->
        <a
          class="tooltip-container"
          href="https://www.curseforge.com/members/ironbatman2715/projects"
          target="_blank"
        >
          <img :src="icons.curseForge" alt="CurseForge" />
          <span>CurseForge</span>
        </a>

        <p
          class="navToggleButton"
          @click="document.getElementById('navToggle').checked = !document.getElementById('navToggle').checked"
        >
        ☰
        </p>
        <input type="checkbox" id="navToggle" style="display: none" />
        <nav>
          <ul>
            <li><a :class="{active: page === 'Home'}" href="../">Home</a></li>
            <!--<li><a :class="{active: page === 'Discord'}" :href="links.discord">Discord</a></li>-->
            <li><a :class="{active: page === 'D&D'}" :href="links.dnd">D&D</a></li>
            <li><a :class="{active: page === 'References'}" :href="links.references">References</a></li>
          </ul>
        </nav>
      </div>`,
    page: props.page,
    icons: {
      home: `${this.page === "Home" ? "" : "."}./resources/assets/icons/favicon_io/android-chrome-512x512.png`,
      github: `${this.page === "Home" ? "" : "."}./resources/assets/icons/socials/github.svg`,
      discord: `${this.page === "Home" ? "" : "."}./resources/assets/icons/socials/discord.svg`,
      curseForge: `${this.page === "Home" ? "" : "."}./resources/assets/icons/socials/curseforge.svg`,
    },
    links: {
      discord: `${this.page === "Home" ? "" : "."}./discord`,
      dnd: `${this.page === "Home" ? "" : "."}./d&d`,
      references: `${this.page === "Home" ? "" : "."}./references`,
    },
  };
}

function Footer(props) {
  return {
    $template: ``,
    page: props.page,
  };
}

export default { Header, Footer };
