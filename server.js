const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const path = require('path');
require('dotenv').config();

const app = express();

const blogRoute = require('./routes/blog')
const authRoute = require('./routes/auth')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Database connected'))
.catch(err => console.log(err));

app.use(cors());
app.use(express.json());
app.use(passport.initialize());
require('./config/passport')(passport);

app.use('/auth', authRoute);
app.use('/blogs', blogRoute);
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
