import Bonjour from "bonjour-service";

const init = async () => {
  const instance = new Bonjour();
  console.log("Publishing bonjour service");
  const a = instance.publish({
    name: "TestApp Desktop Server",
    type: "testapp",
    protocol: "tcp",
    port: 3000,
  });

  while (true) {
    // keep the process alive
    await new Promise((resolve) => setTimeout(resolve, 4000));
    console.log("instance", a);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Waiting...");
  }
};

init();
