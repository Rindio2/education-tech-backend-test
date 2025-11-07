// src/utils/schedule.js

function calculateSchedule(startDate, totalClasses, classWeekdays, holidays, holidayRanges) {
  const result = [];
  const start = new Date(startDate);
  const holidaySet = new Set(holidays);

  // Kiểm tra xem 1 ngày có nằm trong kỳ nghỉ dài hay không
  const isInRange = (date, ranges) => {
    return ranges.some(([start, end]) => {
      const s = new Date(start);
      const e = new Date(end);
      return date >= s && date <= e;
    });
  };

  let current = new Date(start);

  // Duyệt qua từng ngày cho đến khi đủ totalClasses
  while (result.length < totalClasses) {
    const jsDay = current.getDay(); // 0=Chủ nhật → 6=Thứ bảy
    const weekday = (jsDay + 6) % 7; // Chuyển về 0=Thứ hai, 6=Chủ nhật

    const formatted = current.toISOString().split("T")[0];

    if (
      classWeekdays.includes(weekday) &&
      !holidaySet.has(formatted) &&
      !isInRange(current, holidayRanges)
    ) {
      result.push(formatted);
    }

    current.setDate(current.getDate() + 1); // sang ngày tiếp theo
  }

  return {
    endDate: result[result.length - 1],
    fullSchedule: result,
  };
}

// ======= TEST DEMO =======
const schedule = calculateSchedule(
  "2026-01-01", // Ngày bắt đầu
  16,            // Tổng số buổi học
  [1, 3],        // Thứ Ba (1) và Thứ Năm (3)
  ["2026-04-30", "2026-05-01"], // Ngày lễ
  [["2026-01-26", "2026-02-05"]] // Nghỉ Tết
);

console.log("📅 Kết quả lịch học:");
console.log(schedule);

module.exports = calculateSchedule;
