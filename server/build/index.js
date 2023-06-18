"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
console.log("To, że coś jest prawdziwe..");
var jimp = require("jimp");
var express = require("express");
var app = express();
var port = 3000;
app.use(express.json());
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
app.post("/newImage", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, images, jimps, baseImage, overlayImage1, overlayImage2, overlayImage3, x1, y1, x2, y2, x3, y3, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                body = req.body;
                images = [
                    "./images/bg/".concat(body.bg, ".png"),
                    "./images/ator/".concat(body.ator, ".png"),
                    "./images/elements/".concat(body.element1, ".png"),
                    "./images/elements/".concat(body.element2, ".png"),
                ];
                return [4 /*yield*/, Promise.all(images.map(function (image) { return jimp.read(image); }))];
            case 1:
                jimps = _a.sent();
                baseImage = jimps[0];
                overlayImage1 = jimps[1];
                overlayImage2 = jimps[2];
                overlayImage3 = jimps[3];
                x1 = 0;
                y1 = baseImage.getHeight() - overlayImage1.getHeight();
                x2 = baseImage.getWidth() - overlayImage2.getWidth();
                y2 = baseImage.getHeight() - overlayImage2.getHeight();
                x3 = baseImage.getWidth() - overlayImage3.getWidth() - 300;
                y3 = baseImage.getHeight() - overlayImage3.getHeight();
                baseImage.composite(overlayImage1, x1, y1);
                baseImage.composite(overlayImage2, x2, y2);
                baseImage.composite(overlayImage3, x3, y3);
                baseImage.write("./images/newImage.png", function (err) {
                    if (err) {
                        console.error("Error processing images:", err);
                        res.send("Error processing images!");
                    }
                    else {
                        console.log("Image saved!");
                        res.send("Image saved!");
                    }
                });
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.error("Error processing images:", err_1);
                res.send("Error processing images!");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
