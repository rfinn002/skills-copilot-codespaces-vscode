// Create web server
// Load modules
import express from 'express';
import { commentsController } from '../controllers';

const router = express.Router();

router.get('/comments', commentsController.getComments);
router.post('/comments', commentsController.createComment);
router.put('/comments/:id', commentsController.updateComment);
router.delete('/comments/:id', commentsController.deleteComment);

export default router;