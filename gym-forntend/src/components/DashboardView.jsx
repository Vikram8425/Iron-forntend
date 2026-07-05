import React, { useState, useMemo } from "react";
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis,
  Tooltip, ResponsiveContainer, CartesianGrid,
} from "recharts";
import {
  LayoutDashboard, Users, Dumbbell, Receipt, CalendarDays, Search,
  Plus, X, QrCode, TrendingUp, TrendingDown, Clock, AlertCircle,
  CheckCircle2, ChevronDown, Bell, Menu, MoreVertical, Filter,
  CreditCard, Activity, Flame, Salad, ArrowUpRight, ArrowDownRight,
  MapPin, Star, Mail, Phone, Calendar, Download,
} from "lucide-react";

import SectionHeading from "../utils/SectionHeading";
import Button from "../utils/Button";
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
} from "../../src/assets/data";


import Card from "../utils/Card";
import OccupancyPulse from "./OccupancyPulse";
import KpiCard from "./KpiCard";
import Avatar from "../utils/Avatar";
import StatusPill from "../utils/StatusPill";

function DashboardView({ openMember }) {
  return (
    <div>
      <SectionHeading
        eyebrow="Overview"
        title="Good morning, Aarav 👋"
        action={
          <div style={{ display: "flex", gap: 10 }}>
            <Button variant="subtle" icon={Download} small>Export</Button>
            <Button variant="primary" icon={Plus}>Add Member</Button>
          </div>
        }
      />

      <div style={{ marginBottom: 20 }}>
        <OccupancyPulse />
      </div>

      <div className="kpi-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 20 }}>
        <KpiCard label="Active Members" value="1,284" delta="+42 this month" deltaPositive icon={Users} accent="#3D7FFF" />
        <KpiCard label="Today's Attendance" value="312" delta="+18% vs avg" deltaPositive icon={Activity} accent="#D4FF3D" />
        <KpiCard label="Pending Payments" value="₹38.4k" delta="9 invoices overdue" deltaPositive={false} icon={CreditCard} accent="#FF6B35" />
        <KpiCard label="Expiring This Week" value="27" suffix="members" icon={AlertCircle} accent="#FF4757" />
      </div>

      <div className="chart-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16, marginBottom: 20 }}>
        <Card style={{ padding: 22 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#F2F4F8", fontFamily: "'Space Grotesk', sans-serif" }}>Revenue Trend</div>
              <div style={{ fontSize: 12, color: "#8B92A5", marginTop: 2 }}>Monthly recurring revenue, last 6 months</div>
            </div>
            <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 700, color: "#2ECC71" }}>
              <TrendingUp size={15} /> +18.6%
            </span>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={revenueData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3D7FFF" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#3D7FFF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
              <XAxis dataKey="m" stroke="#8B92A5" fontSize={12} tickLine={false} axisLine={false} fontFamily="Inter" />
              <YAxis stroke="#8B92A5" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `₹${v / 1000}k`} fontFamily="Inter" />
              <Tooltip
                contentStyle={{ background: "#1D212C", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, fontSize: 13, fontFamily: "Inter" }}
                labelStyle={{ color: "#F2F4F8" }}
                formatter={(v) => [`₹${v.toLocaleString()}`, "Revenue"]}
              />
              <Area type="monotone" dataKey="revenue" stroke="#3D7FFF" strokeWidth={2.5} fill="url(#revFill)" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card style={{ padding: 22 }}>
          <div style={{ marginBottom: 18 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#F2F4F8", fontFamily: "'Space Grotesk', sans-serif" }}>Peak Gym Hours</div>
            <div style={{ fontSize: 12, color: "#8B92A5", marginTop: 2 }}>Avg check-ins by hour, today</div>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={peakHoursData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
              <XAxis dataKey="h" stroke="#8B92A5" fontSize={11} tickLine={false} axisLine={false} fontFamily="Inter" />
              <YAxis stroke="#8B92A5" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{ background: "#1D212C", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, fontSize: 13, fontFamily: "Inter" }}
                labelStyle={{ color: "#F2F4F8" }}
                cursor={{ fill: "rgba(255,255,255,0.04)" }}
              />
              <Bar dataKey="v" radius={[4, 4, 0, 0]}>
                { 
                peakHoursData.map((d, i) => (
                  <Bar key={i} fill={d.v > 70 ? "#FF6B35" : "#3D7FFF"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <div className="bottom-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <Card style={{ padding: 22 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#F2F4F8", fontFamily: "'Space Grotesk', sans-serif", marginBottom: 14 }}>Memberships Expiring Soon</div>
          {members.filter(m => m.status === "expiring" || m.status === "overdue").map((m) => (
            <div key={m.id} onClick={() => openMember(m)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.05)", cursor: "pointer" }}>
              <Avatar initials={m.avatar} color={m.status === "overdue" ? "#FF4757" : "#FF6B35"} size={34} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#F2F4F8" }}>{m.name}</div>
                <div style={{ fontSize: 12, color: "#8B92A5" }}>{m.plan} · expires {m.expires}</div>
              </div>
              <StatusPill status={m.status} />
            </div>
          ))}
        </Card>

        <Card style={{ padding: 22 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#F2F4F8", fontFamily: "'Space Grotesk', sans-serif", marginBottom: 14 }}>Today's Class Lineup</div>
          {classSchedule.filter(c => c.day === "Mon").map((c) => (
            <div key={c.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ width: 4, height: 34, borderRadius: 4, background: c.color, flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#F2F4F8" }}>{c.name}</div>
                <div style={{ fontSize: 12, color: "#8B92A5" }}>{c.instructor} · {c.start}:00</div>
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: c.booked >= c.cap ? "#FF6B35" : "#8B92A5" }}>
                {c.booked}/{c.cap}
              </div>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}
export default DashboardView;