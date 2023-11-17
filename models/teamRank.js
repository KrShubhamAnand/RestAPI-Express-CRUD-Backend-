const mongoose = require('mongoose');
const validator = require('validator');

const teamSchema = new mongoose.Schema({
    rank: {
        type: Number,
        unique: true,
        required: true
    },
    nationality: {
        type:String,
        required: true
    },
    matches: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        unique: true
    }
})

const TeamRank = mongoose.model('TeamRank',teamSchema);
module.exports = TeamRank;