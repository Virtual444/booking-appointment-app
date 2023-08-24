const express = require('express');
const cors = require('cors');
const app = express();
const sequelize = require('./util/database');
const path = require('path');
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.json());
app.use(cors());
const userRoutes = require('./routes/formRoutes'); // Import userRoutes, not formRoutes


app.use('/user', userRoutes); // Use the userRoutes middleware

sequelize.sync({force:true}).then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch(error => {
    console.log('Database sync error:', error);
});  
