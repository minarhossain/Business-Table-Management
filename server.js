const app = require('./app');
const port = 5000;
const mongoose = require('mongoose');
const dbConnection = async () => {
    await mongoose.connect('mongodb://localhost:27017/BUSINESS-TABLE-MANAGEMENT').then(console.log('DB Connected')).catch(error => console.error(error))

}
app.listen(port, async () => {
    console.log(`server is running http://localhost:${port}`);
    await dbConnection();
})