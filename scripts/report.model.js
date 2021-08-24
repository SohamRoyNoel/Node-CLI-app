const mongoose = require('mongoose');

const reportSchema = mongoose.Schema({
    Year: { type: 'string'},
    Industry_aggregation_NZSIOC: { type: 'string'},
    Industry_code_NZSIOC: { type: 'string'},
    Industry_name_NZSIOC: { type: 'string'},
    Units: { type: 'string'},
    Variable_code: { type: 'string'},
    Variable_name: { type: 'string'},
    Variable_category: { type: 'string'},
    Value: { type: 'string'},
    Industry_code_ANZSIC06: { type: 'string'},
});

module.exports = mongoose.model('Report', reportSchema);