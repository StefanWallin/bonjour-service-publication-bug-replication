import Bonjour from "bonjour-service";

const init = async () => {
  const instance = new Bonjour();
  console.log("Finding bonjour service");
  const a = instance.find(
    {
      type: "testapp",
      protocol: "tcp",
    },
    (service) => {
      console.log("service", service);
    }
  );
};

init();
