// mqttClient.js
import mqtt from "mqtt";

let client = null;
const subscribedTopics = new Set();

export const getClient = () => {
  if (!client) {
    client = mqtt.connect({
      protocol: "wss",
      host: "broker.hivemq.com",
      port: 8884,
      path: "/mqtt",
    });

    client.on("connect", () => {
      console.log("Connected to MQTT broker");
      client.subscribe("lkm/cams", (err) => {
        if (!err) {
          console.log("Subscribed to lkm/cams");
        }
      });
    });
  }

  return client;
};

export const subscribeToTopic = (topic) => {
  if (!subscribedTopics.has(topic)) {
    client.subscribe(topic, (err) => {
      if (!err) {
        console.log(`Subscribed to ${topic}`);
        subscribedTopics.add(topic);
      }
    });
  } else {
    console.log(`Already subscribed to ${topic}`);
  }
};
