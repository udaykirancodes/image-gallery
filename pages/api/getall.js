import connect from '../../middlewares/connect';

import ImageModel from '@/models/Image';

// Get All Images

const handler = async (req, res) => {
    if (req.method === 'GET') {
        try {
            let images = await ImageModel.find();
            return res.status(200).json(images);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    } else {
        res.status(422).send('data_incomplete');
    }
};

export default connect(handler);