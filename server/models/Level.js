const mongoose = require("mongoose");
const { Schema } = mongoose;

const levelSchema = new Schema({
  levelNumber: { type: Number, required: true },
  requiredPoints: { type: Number, required: true },
  users: [
    {
      userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
      score: { type: Number, default: 0 },
    },
  ],
});

levelSchema.index({ levelNumber: 1 });
levelSchema.index({ 'users.userId': 1 });
levelSchema.index({ levelNumber: 1, 'users.userId': 1 });

const Level = mongoose.model("Level", levelSchema);

module.exports = Level;