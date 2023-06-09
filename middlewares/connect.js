import mongoose from 'mongoose';

const connect = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        // Use current db connection
        return handler(req, res);
    }
    // Use new db connection
    await mongoose.connect(process.env.mongodburl, {
        useUnifiedTopology: true,
        // useFindAndModify: false,
        // useCreateIndex: true,
        useNewUrlParser: true
    });
    console.log('Database Connected');
    return handler(req, res);
};

export default connect;