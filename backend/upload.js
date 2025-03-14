import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'uploads/');
    },
    filename: (req, file, cb)=>{
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random()*1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
});

export const upload = multer({
    storage,
    // 5MB limit
    limits: {fileSize: 5 * 1024 * 1024},
});
