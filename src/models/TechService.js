const techServiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  category: {
    type: String,
    enum: ["software", "training", "consulting", "thesis"],
    required: true,
  },
});

module.exports = mongoose.model("TechService", techServiceSchema);
