const serviceOrderSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  service: { type: mongoose.Schema.Types.ObjectId, ref: "TechService", required: true },
  staff: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: {
    type: String,
    enum: ["pending", "in_progress", "completed"],
    default: "pending",
  },
  feedback: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ServiceOrder", serviceOrderSchema);
