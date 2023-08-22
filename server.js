import express from "express";
import ViteExpress from "vite-express";
import bodyParser from "body-parser";
import cors from "cors";
import sendEmail from './controller/contactUs.js'

const app = express();
const port = 3000;
ViteExpress.config({ printViteDevServerHost: true });

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Permissions-Policy", "ch-ua-form-factor=(none)");
  next();
});

app.use(cors());

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "." });
});

app.post('/send-email',sendEmail)

ViteExpress.listen(app, port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
