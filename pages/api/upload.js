import connect from '../../middlewares/connect';
import nc from "next-connect";
import multer from 'multer';
import mongoose from 'mongoose';
import path from 'path';
import uniqid from 'uniqid'
import ImageModel from '../../models/Image';
export const config = {
    api: {
        bodyParser: false
    }
}
// MULTER Requirements
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + uniqid() + path.extname(file.originalname))
    }
});
const upload = multer({ storage: storage });
const handler = nc({
    onError: (err, req, res, next) => {
        console.error(err.stack);
        console.error(err);
        res.status(500).json(err);
    },
    onNoMatch: (req, res) => {
        res.status(404).end("Page is not found");
    },
}).get((req, res) => {
    res.send('Upload GET')
}).post(upload.array('images', 50), async (req, res) => {
    try {
        let descarr = JSON.parse(req.body.desc);
        if (req.files && req.files.length) {
            let ind = 0;
            for await (let file of req.files) {
                let saved = new ImageModel({
                    src: file.filename,
                    desc: descarr[ind++] || ''
                })
                await saved.save();
            }
        }
        return res.status(200).json({ success: true, msg: "Uploaded" })
    } catch (error) {
        return
    }
})

export default connect(handler);