import { base } from "$app/paths";

export function getRelativeURL(subURL = "/"): string {
  let fullRelativeURL = base;

  if (!subURL.startsWith("/")) {
    fullRelativeURL += "/";
  }

  fullRelativeURL += subURL;

  return fullRelativeURL;
}
