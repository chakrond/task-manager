const mongoose = require('mongoose')


const RTdataSchema = new mongoose.Schema({

    recTime: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isDate(value)) {
                throw new Error('Date invalid')
            }
        }
    },
    Humidity: {
        type: Number,
        required: true,
        trim: true
    },
    Temperature: {
        type: Number,
        required: true,
        trim: true,
        set: n => n.toFixed(1)
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'users' // Create reference to 'users' schema
    }
}, {
    timestamps: true
})




const RTData = mongoose.model('RTdata', RTdataSchema)

module.exports = RTData