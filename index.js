const mongoose = require('mongoose');
const Report = require('./scripts/report.model');

const db = mongoose.connect('mongodb://localhost:27017/csv-reader', { useUnifiedTopology: true });

// import Data to db
const importDataFromCSV = async (report) => {
    await Report.create(report).then(r => {
        return 'Data Imported';
    })
}

module.exports = {
    importDataFromCSV
}