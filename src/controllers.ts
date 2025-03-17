import express from 'express';
import { Check, create, upload } from './routes';
const router=express.Router();
router.post('/create' , upload.single('profilePicture'),create);
router.get('/ping',Check);
export default router;