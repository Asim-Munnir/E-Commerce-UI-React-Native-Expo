import dotenv from "dotenv";
dotenv.config()

import express from "express"
import cors from "cors";

// routes
import paymentRoutes from "./routes/paymentRoutes.js"

const app = express()

app.use(express.json())
app.use(cors());

const PORT = process.env.PORT || 3000

app.use("/api/v1/payment", paymentRoutes)

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`)
})

