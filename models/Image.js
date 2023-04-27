const mongoose = require('mongoose');
const ImageSchema = new mongoose.Schema({
    src: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        default: 'Image'
    }
},
    { timestamps: true })

export default mongoose.models['Image'] || mongoose.model('Image', ImageSchema);