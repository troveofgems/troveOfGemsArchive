import express from "express";

// Controller Imports
import {
    renderError
} from "../../controllers/error.controller";

// Instantiate Router
const router = express.Router();

router // Top Level Route
    .route('/')
    .get(renderError);

export default router;