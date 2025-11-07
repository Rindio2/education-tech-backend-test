const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, unique: true, required: true },
  description: String,
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  staff: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  startDate: Date,
  endDate: Date,
  googleMeetLink: String,
  maxStudents: Number,
  subjectBook: String,
});

module.exports = mongoose.model("Course", courseSchema);
