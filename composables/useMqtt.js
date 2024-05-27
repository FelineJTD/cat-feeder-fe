import { ref, reactive } from "vue";
import mqtt from "mqtt";

const client = mqtt.connect({
  host: "broker.hivemq.com",
  port: 8000,
  path: "/mqtt"
});

const imageUrls = reactive({});

client.on("connect", () => {
  console.log("Connected to MQTT broker");
  client.subscribe("lkm/cams", (err) => {
    if (!err) {
      console.log("Subscribed to lkm/cams");
    }
  });
});

client.on("message", (topic, message) => {
  if (topic === "lkm/cams") {
    const newImageTopic = "lkm/image-" + message.toString();
    client.subscribe(newImageTopic, (err) => {
      if (!err) {
        console.log(`Subscribed to ${newImageTopic}`);
      }
    });
  } else {
    const blob = new Blob([message], { type: "image/jpeg" });
    const deviceId = topic.toString().split("-")[1];
    console.log(`Received image for ${deviceId}`);
    imageUrls[deviceId] = URL.createObjectURL(blob);
  }
});

export function useMqtt() {
  return imageUrls;
}
