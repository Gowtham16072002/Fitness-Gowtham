const mongoose = require("mongoose");

const programSchema = new mongoose.Schema({
    title: String,
    image: String,
    features: [String],
    route: String,
});

const programContentSchema = new mongoose.Schema({
    programs: [programSchema],
});

module.exports = mongoose.model("ProgramContent", programContentSchema);