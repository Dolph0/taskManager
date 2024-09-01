const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});
