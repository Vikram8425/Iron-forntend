import React, { useState, useMemo } from "react";

import {
  STATUS_STYLES,
  revenueData,
  peakHoursData,
  members,
  classSchedule,
  attendanceLog,
  workoutPlan,
  trainers,
  ptBookings,
  transactions
} from "./assets/data";

import SectionHeading from "./utils/SectionHeading";
import Button from "./utils/Button";
import Card from "./utils/Card";
import   "./App.css";
import ScheduleView from "./components/ScheduleView"; 
import DashboardView from "./components/DashboardView";
import Avatar from "./utils/Avatar";
import StatusPill from "./utils/StatusPill";
import KpiCard from "./components/KpiCard";
import MembersView from "./components/MemberView";
import BillingView from "./components/BillingView";
import Sidebar from "./components/Sidebar";
import MemberModal from "./components/MemberModal";
import TopBar from "./components/TopBar";
/* ----------------------------- Design Tokens ----------------------------- */
// Color: ink #0E1015, surface #161922, surface2 #1D212C, border rgba(255,255,255,.08)
// Accent blue #3D7FFF (primary action), orange #FF6B35 (energy/alert), lime #D4FF3D (signature/live)
// Text #F2F4F8 / muted #8B92A5. Success #2ECC71. Danger #FF4757.
// Type: display = Space Grotesk, body = Inter, mono = JetBrains Mono (data/IDs)
// Spacing scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64

const FONT_LINK_ID = "gym-saas-fonts";

function useFonts() {
  React.useEffect(() => {
    if (document.getElementById(FONT_LINK_ID)) return;
    const link = document.createElement("link");
    link.id = FONT_LINK_ID;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap";
    document.head.appendChild(link);
  }, []);
}

/* ----------------------------- Mock Data ----------------------------- */

/* ----------------------------- KPI Card ----------------------------- */
/* ----------------------------- Sidebar ----------------------------- */
/* ----------------------------- Top Bar ----------------------------- */

/* ----------------------------- Live Occupancy Pulse (signature element) ----------------------------- */



/* ----------------------------- DASHBOARD VIEW ----------------------------- */



/* ----------------------------- MEMBER MANAGEMENT VIEW ----------------------------- */



/* ----------------------------- Member Profile Modal ----------------------------- */


/* ----------------------------- CLASS SCHEDULE VIEW ----------------------------- */



/* ----------------------------- App Shell ----------------------------- */

export default function GymDashboard() {
  useFonts();


  const titles = {
    dashboard: "Dashboard",
    members: "Members",
    staff: "Staff & Trainers",
    billing: "Billing",
    schedule: "Schedule",
  };

  const [active, setActive] = useState("dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  return (
    <div className="Mainbody">
     

      <div className="app-shell">
        <Sidebar active={active} setActive={setActive} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        <div className="main">
          <TopBar title={titles[active]} onMenu={() => setMobileOpen(true)} />
          <div className="content">
            {active === "dashboard" && <DashboardView openMember={setSelectedMember} />}
            {active === "members" && <MembersView openMember={setSelectedMember} />}
          
            {active === "billing" && <BillingView />}
            {active === "schedule" && <ScheduleView />}
          </div>
        </div>
      </div>

      <MemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </div>
  );
}
