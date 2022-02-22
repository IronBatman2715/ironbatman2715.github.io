<script context="module">
  import { browser, dev } from "$app/env";

  // we don't need any JS on this page, though we'll load
  // it in dev so that we get hot module replacement...
  export const hydrate = dev;

  // ...but if the client-side router is already loaded
  // (i.e. we came here from elsewhere in the app), use it
  export const router = browser;

  // since there's no dynamic data here, we can prerender
  // it so that it gets served as a static asset in prod
  export const prerender = true;
</script>

<section>
  <a href="https://drive.google.com/drive/folders/1yMdMG0g1rOsjeEt3NbOXM_V1cbrWtS98" target="_blank"
    >My D&D Google Drive</a
  >
  <p>
    My Google drive is full of almost all of the official D&D books in PDF form and character sheet templates (many with
    auto-math macros).
    <br /><br />
    This is also where I host all my campaigns. So look here for session 0 information, art (maps, drawings, pictures, etc.),
    your party members' character sheets, and the spreadsheet where I keep every character's current status (conditions &
    HP)!
  </p>
</section>
<section>
  <a href="https://ironbatman2715.github.io/DND-Stenograph/" target="_blank">Stenograph</a>
  <p>
    Stenograph is an
    <a href="https://github.com/IronBatman2715/DND-Stenograph" target="_blank">open-source</a>
    web app that simulates a D&D character sheet. Click the link above to open it in a new tab! <br /><br />
    Don't forget to save your character once you've made it! Stenograph will save your character data as a JSON. Hold on
    to this file and then simply click load and upload the JSON to view it again later.
  </p>
</section>
<section>
  <a href="https://drive.google.com/file/d/1I57xwVzF9fVRfcwG-rOA9XOlbxBF9ntM/view" target="_blank"
    >Player's General Rules</a
  >
  <p>
    The Player's General Rules is written by me with the intention of putting all the most commonly referenced D&D rules
    and my favorite variant rules in one place. Unless otherwise stated or specific to the campaign, these are the rules
    I defer to when I DM.
    <br /><br />
    I recommend you download it and use the header/bookmark feature of PDFs. Otherwise it can be cumbersome to navigate.
    <br /><br />
    The only topic I do not cover in this document is character creation. Other than using the documents in my Google Drive,
    keep scrolling on this webpage for more information on character creation!
  </p>
</section>
<section>
  <a href="https://www.subclassguide.com/" target="_blank">SubclassGuide.com</a>
  <p>
    A web app that allows you to view all official Races(and their Subraces) as well as Backgrounds. You can then toggle
    each source book so you can only view from a subset of the total.
  </p>
</section>
