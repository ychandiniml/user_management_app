import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoutes from "./api/routes/userRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/user", userRoutes);


var PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log('app listening on port ' + PORT);
});