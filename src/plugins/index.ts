/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from "./vuetify";
import router from "@/router";
import { loadFonts } from "@/plugins/webfontloader";

// Types
import type { App } from "vue";

export default async (app: App) => {
  loadFonts();
  app.use(vuetify);
  app.use(router);
};
