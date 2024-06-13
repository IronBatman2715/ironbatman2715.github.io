import { redirect } from "@sveltejs/kit";

import type { PageLoad } from "./$types";
import { getRelativeURL } from "@/lib/utils/misc";

export const load: PageLoad = () => {
  redirect(308, getRelativeURL());
};
