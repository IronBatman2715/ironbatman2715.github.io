import { redirect } from "@sveltejs/kit";

import { getRelativeURL } from "$lib/utils/routing";
import type { PageLoad } from "./$types";

export const load: PageLoad = () => {
  redirect(308, getRelativeURL("dnd"));
};
