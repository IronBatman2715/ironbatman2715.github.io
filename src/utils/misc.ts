import { base } from "$app/paths";

/** Get url relative to project base url */
export function getRelativeURL(subURL = "/"): string {
  let fullRelativeURL = base;

  if (!subURL.startsWith("/")) {
    fullRelativeURL += "/";
  }

  fullRelativeURL += subURL;

  return fullRelativeURL;
}
