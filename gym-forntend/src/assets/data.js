import { LayoutDashboard,Dumbbell,Receipt,CalendarDays,Users} from "lucide-react";

export const revenueData = [
  { m: "Jan", revenue: 18200, churn: 4 },
  { m: "Feb", revenue: 19850, churn: 3 },
  { m: "Mar", revenue: 21100, churn: 5 },
  { m: "Apr", revenue: 20400, churn: 6 },
  { m: "May", revenue: 23900, churn: 3 },
  { m: "Jun", revenue: 26750, churn: 2 },
];

 export const peakHoursData = [
  { h: "5am", v: 12 }, { h: "7am", v: 58 }, { h: "9am", v: 34 },
  { h: "11am", v: 22 }, { h: "1pm", v: 30 }, { h: "3pm", v: 26 },
  { h: "5pm", v: 71 }, { h: "7pm", v: 94 }, { h: "9pm", v: 41 },
];

export const members = [
  { id: "MB-1042", name: "Priya Sharma", email: "priya.sharma@mail.com", phone: "+91 98765 11234", plan: "Elite Annual", status: "active", joined: "Jan 2024", expires: "12 Jan 2027", avatar: "PS", attendance: 87 },
  { id: "MB-1043", name: "Rohan Mehta", email: "rohan.m@mail.com", phone: "+91 98765 22341", plan: "Pro Monthly", status: "expiring", joined: "Mar 2025", expires: "29 Jun 2026", avatar: "RM", attendance: 64 },
  { id: "MB-1044", name: "Ananya Iyer", email: "ananya.iyer@mail.com", phone: "+91 98765 33452", plan: "Basic Monthly", status: "active", joined: "Nov 2025", expires: "14 Jul 2026", avatar: "AI", attendance: 41 },
  { id: "MB-1045", name: "Karan Singh", email: "karan.s@mail.com", phone: "+91 98765 44563", plan: "Elite Annual", status: "overdue", joined: "Feb 2023", expires: "02 Jun 2026", avatar: "KS", attendance: 23 },
  { id: "MB-1046", name: "Meera Nair", email: "meera.nair@mail.com", phone: "+91 98765 55674", plan: "Pro Monthly", status: "active", joined: "Aug 2024", expires: "08 Aug 2026", avatar: "MN", attendance: 92 },
  { id: "MB-1047", name: "Vikram Rao", email: "vikram.rao@mail.com", phone: "+91 98765 66785", plan: "Basic Monthly", status: "expiring", joined: "May 2025", expires: "01 Jul 2026", avatar: "VR", attendance: 55 },
  { id: "MB-1048", name: "Diya Kapoor", email: "diya.kapoor@mail.com", phone: "+91 98765 77896", plan: "Elite Annual", status: "active", joined: "Sep 2023", expires: "19 Sep 2026", avatar: "DK", attendance: 78 },
  { id: "MB-1049", name: "Arjun Desai", email: "arjun.d@mail.com", phone: "+91 98765 88907", plan: "Pro Monthly", status: "overdue", joined: "Dec 2025", expires: "10 Jun 2026", avatar: "AD", attendance: 12 },
];

export const attendanceLog = [
  { date: "25 Jun 2026", time: "06:42 AM", duration: "1h 12m" },
  { date: "23 Jun 2026", time: "07:01 AM", duration: "58m" },
  { date: "22 Jun 2026", time: "06:35 AM", duration: "1h 24m" },
  { date: "20 Jun 2026", time: "06:50 AM", duration: "1h 05m" },
];

export const workoutPlan = [
  { day: "Mon", focus: "Push (Chest/Shoulders)", done: true },
  { day: "Tue", focus: "Pull (Back/Biceps)", done: true },
  { day: "Wed", focus: "Legs + Core", done: false },
  { day: "Thu", focus: "Rest / Mobility", done: false },
  { day: "Fri", focus: "Full Body HIIT", done: false },
];

export const trainers = [
  { name: "Sahil Verma", specialty: "Strength & Conditioning", rating: 4.9, sessionsToday: 5, avatar: "SV", status: "On floor", color: "#3D7FFF" },
  { name: "Naina Joshi", specialty: "Yoga & Mobility", rating: 5.0, sessionsToday: 3, avatar: "NJ", status: "In class", color: "#D4FF3D" },
  { name: "Tarun Bhalla", specialty: "CrossFit & HIIT", rating: 4.8, sessionsToday: 6, avatar: "TB", status: "On floor", color: "#FF6B35" },
  { name: "Ishaan Gill", specialty: "Personal Training", rating: 4.7, sessionsToday: 4, avatar: "IG", status: "With client", color: "#2ECC71" },
];

export const ptBookings = [
  { client: "Priya Sharma", trainer: "Sahil Verma", time: "Today, 5:00 PM" },
  { client: "Karan Singh", trainer: "Ishaan Gill", time: "Today, 6:30 PM" },
  { client: "Meera Nair", trainer: "Tarun Bhalla", time: "Tomorrow, 7:00 AM" },
];

export const transactions = [
  { id: "TXN-88291", member: "Priya Sharma", plan: "Elite Annual", amount: 24999, date: "25 Jun 2026", status: "paid", method: "UPI" },
  { id: "TXN-88290", member: "Meera Nair", plan: "Pro Monthly", amount: 2499, date: "24 Jun 2026", status: "paid", method: "Card" },
  { id: "TXN-88289", member: "Karan Singh", plan: "Elite Annual", amount: 24999, date: "22 Jun 2026", status: "overdue", method: "—" },
  { id: "TXN-88288", member: "Diya Kapoor", plan: "Elite Annual", amount: 24999, date: "20 Jun 2026", status: "paid", method: "UPI" },
  { id: "TXN-88287", member: "Arjun Desai", plan: "Pro Monthly", amount: 2499, date: "18 Jun 2026", status: "overdue", method: "—" },
  { id: "TXN-88286", member: "Ananya Iyer", plan: "Basic Monthly", amount: 1299, date: "16 Jun 2026", status: "paid", method: "Card" },
];

export const classSchedule = [
  { id: 1, name: "Sunrise Yoga", instructor: "Naina Joshi", day: "Mon", start: 6, dur: 1, cap: 20, booked: 17, color: "#D4FF3D" },
  { id: 2, name: "CrossFit Burn", instructor: "Tarun Bhalla", day: "Mon", start: 18, dur: 1, cap: 15, booked: 15, color: "#FF6B35" },
  { id: 3, name: "HIIT Express", instructor: "Tarun Bhalla", day: "Tue", start: 7, dur: 0.75, cap: 18, booked: 9, color: "#FF6B35" },
  { id: 4, name: "Power Lifting", instructor: "Sahil Verma", day: "Tue", start: 17, dur: 1.5, cap: 12, booked: 11, color: "#3D7FFF" },
  { id: 5, name: "Vinyasa Flow", instructor: "Naina Joshi", day: "Wed", start: 6, dur: 1, cap: 20, booked: 12, color: "#D4FF3D" },
  { id: 6, name: "CrossFit Burn", instructor: "Tarun Bhalla", day: "Wed", start: 18, dur: 1, cap: 15, booked: 14, color: "#FF6B35" },
  { id: 7, name: "Strength Circuit", instructor: "Sahil Verma", day: "Thu", start: 17, dur: 1, cap: 14, booked: 6, color: "#3D7FFF" },
  { id: 8, name: "Restorative Yoga", instructor: "Naina Joshi", day: "Fri", start: 6, dur: 1, cap: 20, booked: 19, color: "#D4FF3D" },
  { id: 9, name: "HIIT Express", instructor: "Tarun Bhalla", day: "Fri", start: 18, dur: 0.75, cap: 18, booked: 17, color: "#FF6B35" },
  { id: 10, name: "Power Lifting", instructor: "Sahil Verma", day: "Sat", start: 9, dur: 1.5, cap: 12, booked: 8, color: "#3D7FFF" },
];

/* ----------------------------- Shared UI bits ----------------------------- */

export const STATUS_STYLES = {
  active: { bg: "rgba(46,204,113,0.12)", color: "#2ECC71", label: "Active" },
  expiring: { bg: "rgba(255,107,53,0.12)", color: "#FF6B35", label: "Expiring soon" },
  overdue: { bg: "rgba(255,71,87,0.12)", color: "#FF4757", label: "Overdue" },
  paid: { bg: "rgba(46,204,113,0.12)", color: "#2ECC71", label: "Paid" },
};



export const NAV_ITEMS = [
  { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { key: "members", label: "Members", icon: Users },
  { key: "billing", label: "Billing & Invoicing", icon: Receipt },
  { key: "schedule", label: "Class Schedule", icon: CalendarDays },
];