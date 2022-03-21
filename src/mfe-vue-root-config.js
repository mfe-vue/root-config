import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@mfe-vue/flight-application",
  app: () => System.import("@mfe-vue/flight-application"),
  activeWhen: ["/flight"],
});

registerApplication({
  name: "@mfe-vue/train-application",
  app: () => System.import("@mfe-vue/train-application"),
  activeWhen: ["/train"],
});

start({
  urlRerouteOnly: true,
});
