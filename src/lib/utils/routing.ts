import { base } from "$app/paths";

export type PageMetadata = {
  name: string;
  subURL: string;
  description: string;
};

export const pageMetadatas: PageMetadata[] = [
  {
    name: "Home",
    subURL: "",
    description: "Home page of GitHub pages personal website.",
  },
  {
    name: "D&D",
    subURL: "dnd",
    description: "Information and links to my D&D-related things.",
  },
  {
    name: "References",
    subURL: "references",
    description: "Credits and links for assets on this personal website.",
  },
];

/** Get url relative to project base url */
export function getRelativeURL(subURL = "/"): string {
  let fullRelativeURL = base;

  if (!subURL.startsWith("/")) fullRelativeURL += "/";

  fullRelativeURL += subURL;

  return fullRelativeURL;
}

export function getPageMetadataBySubURL(subURL: string): PageMetadata | null {
  for (const pageMetadata of pageMetadatas) {
    if (`/${pageMetadata.subURL}` === subURL) {
      return pageMetadata;
    }
  }
  return null;
}
