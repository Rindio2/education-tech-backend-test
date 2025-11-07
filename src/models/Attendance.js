const attendanceSchema = new mongoose.Schema({
  enrollment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Enrollment",
    required: true,
  },
  date: { type: Date, required: true },
  status: { type: String, enum: ["present", "absent"], default: "present" },
});

module.exports = mongoose.model("Attendance", attendanceSchema);
