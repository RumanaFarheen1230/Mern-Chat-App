import express from "express";
import protectRoute from '../middleware/protectRoute.js';

const router = epress.Router();

router.get("/",protectRoute, getUsersForSidebar);

export default router;
