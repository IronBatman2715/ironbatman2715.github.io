<script lang="ts">
  import { getRelativeURL } from "@/utils/misc";

  import pages from "@/utils/pageData";

  export let currentPage: PageData;
</script>

<div>
  <a href={getRelativeURL()}>
    <img src={getRelativeURL("icons/favicon.svg")} alt="Website icon" />
    <p>IronBatman2715.GitHub.io</p>
  </a>
  <a class="tooltip-container" href="https://github.com/IronBatman2715/" target="_blank">
    <img src={getRelativeURL("icons/github.svg")} alt="Github" />
    <span>GitHub</span>
  </a>
  <!--<a class="tooltip-container" href="" target="_blank">
          <img src={getRelativeURL("icons/discord.svg")} alt="Discord" />
          <span>Discord</span>
        </a>-->
  <a class="tooltip-container" href="https://www.curseforge.com/members/ironbatman2715/projects" target="_blank">
    <img src={getRelativeURL("icons/curseforge.svg")} alt="CurseForge" />
    <span>CurseForge</span>
  </a>
  <label for="navToggleCheckbox" id="navToggleLines">☰</label>
  <input type="checkbox" id="navToggleCheckbox" style="display: none" />
  <nav>
    <ul>
      {#each pages as { name, subURL }}
        <li>
          <a class={subURL === currentPage.subURL ? "active" : ""} href={getRelativeURL(subURL)}>{name}</a>
        </li>
      {/each}
    </ul>
  </nav>
</div>

<style>
  a {
    color: var(--headerText);
  }

  a:hover,
  a:focus {
    color: var(--headerHoverText);
  }

  div {
    background-color: var(--navbar);
    margin: 0;
    padding: 0.5em 1em;
    height: 3rem;

    display: flex;
    flex-flow: row nowrap;
    align-content: center;
  }

  div a:nth-child(2) {
    margin-left: 0.75em !important;
  }

  div a:not(:first-child) {
    margin-left: 0.5em;
  }

  div > a {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  div > a:first-child img {
    width: 3rem;
    height: 3rem;
  }

  div > a:first-child p {
    margin: 0;
    width: 0px;
    transform: scale(0, 1);
    transform-origin: left;
    transition: transform 200ms ease-in-out;

    font-weight: bolder;
    font-size: 1.5em;
  }

  div > a:not(:first-child),
  div > a:not(:first-child) img {
    align-self: center;
    width: 2rem;
    height: 2rem;
  }

  #navToggleLines {
    color: var(--inverseBackground);
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 1rem;
    position: absolute;
    top: 0.5rem;
    right: 0;
    font-size: 2rem;
    cursor: pointer;
    user-select: none;
  }

  nav {
    background-color: var(--navbar);
    position: absolute;
    text-align: right;
    padding-left: 1em;
    top: 4rem;
    right: 0;
    transform: scale(1, 0);
    transform-origin: top;
    transition: transform 250ms ease-in-out;
  }

  nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  nav li {
    margin-bottom: 1em;
    margin-right: 1em;
  }

  nav a {
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    opacity: 0;
    transition: opacity 150ms ease-in-out;
  }

  .active {
    text-decoration: underline;
  }

  #navToggleCheckbox:checked ~ nav {
    transform: scale(1, 1);
  }

  #navToggleCheckbox:checked ~ nav a {
    opacity: 1;
    transition: opacity 250ms ease-in-out 250ms;
  }

  @media screen and (min-width: 900px) {
    div > a:first-child p {
      margin-left: 0.25em;
      width: unset;
      flex: 1 1 100%;
      transform: none;
    }
  }

  @media screen and (min-width: 600px) {
    #navToggleLines {
      display: none;
    }

    nav {
      background-color: var(--clear);
      text-align: center;
      padding: 0;
      top: 1.25em;
      transform: none;
    }

    nav ul {
      display: flex;
    }

    nav li {
      margin-bottom: 0;
    }

    nav a {
      opacity: 1;
    }
  }
</style>
