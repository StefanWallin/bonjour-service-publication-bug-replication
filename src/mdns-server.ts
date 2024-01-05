const mdns = require("mdns");

const initMdnsServer = async () => {
  console.log("Publishing bonjour service");
  const ad = mdns.createAdvertisement(mdns.tcp("testapp"), 3000);
  ad.start();

  while (true) {
    // keep the process alive
    await new Promise((resolve) => setTimeout(resolve, 4000));
    console.log("instance", ad);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Waiting...");
  }
};

initMdnsServer();
