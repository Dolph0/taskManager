const express = require('express');
const protectedRoute = require('./routes/protected');


const app = express();

app.use(express.json());
app.use('/api', protectedRoute);

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
