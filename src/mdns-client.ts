const mdns = require("mdns");

const initMdnsClient = async () => {
  console.log("Finding bonjour service");
  const browser = mdns.createBrowser(mdns.tcp("testapp"));

  browser.on("serviceUp", (service: any) => {
    console.log("service up: ", service);
  });
  browser.on("serviceDown", (service: any) => {
    console.log("service down: ", service);
  });

  browser.start();

  // discover all available service types
  const all_the_types = mdns.browseThemAll();
};

initMdnsClient();
