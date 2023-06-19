console.log("To, że coś jest prawdziwe..");
const path = require("path");
const jimp = require("jimp");
const cors = require("cors");
const express = require("express");
import { Request, Response } from "express";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post("/newImage", async (req: Request, res: Response) => {
  try {
    const { ator, bg, element1, element2 } = req.body;

    const images = [
      `./images/bg/${bg}.png`,
      `./images/ator/${ator}.png`,
      `./images/elements/${element1}.png`,
      `./images/elements/${element2}.png`,
    ];

    const jimps = await Promise.all(images.map((image) => jimp.read(image)));

    const baseImage = jimps[0];
    const overlayImage1 = jimps[1];
    const overlayImage2 = jimps[2];
    const overlayImage3 = jimps[3];

    const x1 = 0; // X-coordinate for overlayImage1
    const y1 = baseImage.getHeight() - overlayImage1.getHeight(); // Y-coordinate for overlayImage1

    const x2 = baseImage.getWidth() - overlayImage2.getWidth() - 300; // X-coordinate for overlayImage2
    const y2 = baseImage.getHeight() - overlayImage2.getHeight(); // Y-coordinate for overlayImage2

    const x3 = baseImage.getWidth() - overlayImage3.getWidth(); // X-coordinate for overlayImage3
    const y3 = baseImage.getHeight() - overlayImage3.getHeight(); // Y-coordinate for overlayImage3

    baseImage.composite(overlayImage1, x1, y1);
    baseImage.composite(overlayImage3, x3, y3);
    baseImage.composite(overlayImage2, x2, y2);

    const newImagePath = path.join(__dirname, "images", "newImage.png");
    await baseImage.writeAsync(newImagePath);

    console.log("Image saved!");
    res.sendFile(newImagePath);
  } catch (err) {
    console.error("Error processing images:", err);
    res.status(500).send("Error processing images!");
  }
});
