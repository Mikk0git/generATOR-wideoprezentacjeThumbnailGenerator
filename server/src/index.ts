console.log("To, że coś jest prawdziwe..");

const jimp = require("jimp");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post(
  "/newImage",
  async (req: any, res: { send: (arg0: string) => void }) => {
    try {
      const { body } = req;
      const images = [
        `./images/bg/${body.bg}.png`,
        `./images/ator/${body.ator}.png`,
        `./images/right/${body.right}.png`,
      ];

      const jimps = await Promise.all(images.map((image) => jimp.read(image)));

      const baseImage = jimps[0];
      const overlayImage1 = jimps[1];
      const overlayImage2 = jimps[2];

      const x1 = 0; // X-coordinate for overlayImage1
      const y1 = baseImage.getHeight() - overlayImage1.getHeight(); // Y-coordinate for overlayImage1

      const x2 = baseImage.getWidth() - overlayImage2.getWidth(); // X-coordinate for overlayImage2
      const y2 = baseImage.getHeight() - overlayImage2.getHeight(); // Y-coordinate for overlayImage2

      baseImage.composite(overlayImage1, x1, y1);
      baseImage.composite(overlayImage2, x2, y2);

      baseImage.write("./images/newImage.png", (err: any) => {
        if (err) {
          console.error("Error processing images:", err);
          res.send("Error processing images!");
        } else {
          console.log("Image saved!");
          res.send("Image saved!");
        }
      });
    } catch (err) {
      console.error("Error processing images:", err);
      res.send("Error processing images!");
    }
  }
);
