import SectionHeading from "../utils/SectionHeading";
import Button from "../utils/Button";
import { Filter,CreditCard,TrendingDown,TrendingUp,AlertCircle,CheckCircle2,Receipt } from "lucide-react";
import KpiCard from "./KpiCard";
import Card from "../utils/Card";
import { ResponsiveContainer,LineChart,CartesianGrid,XAxis,YAxis,Tooltip,Line} from "recharts";
import { revenueData } from "../assets/data";
import { transactions } from "../assets/data";
import StatusPill from "../../src/utils/StatusPill";

function BillingView() {
  return (
    <div>
      <SectionHeading
        eyebrow="Finance"
        title="Billing & Invoicing"
        action={<Button variant="orange" icon={CreditCard}>Process Payment</Button>}
      />

      <div className="kpi-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 20 }}>
        <KpiCard label="MRR" value="₹2.67L" delta="+12.4% MoM" deltaPositive icon={TrendingUp} accent="#2ECC71" />
        <KpiCard label="Outstanding Dues" value="₹38.4k" delta="9 invoices" deltaPositive={false} icon={AlertCircle} accent="#FF6B35" />
        <KpiCard label="Auto-pay Success" value="94.2" suffix="%" icon={CheckCircle2} accent="#3D7FFF" />
        <KpiCard label="Avg. Revenue / Member" value="₹2,080" icon={Receipt} accent="#D4FF3D" />
      </div>

      <Card style={{ padding: 22, marginBottom: 20 }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: "#F2F4F8", marginBottom: 18, fontFamily: "'Space Grotesk', sans-serif" }}>Revenue vs Churn</div>
        <ResponsiveContainer width="100%" height={230}>
          <LineChart data={revenueData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
            <XAxis dataKey="m" stroke="#8B92A5" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#8B92A5" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip contentStyle={{ background: "#1D212C", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, fontSize: 13 }} labelStyle={{ color: "#F2F4F8" }} />
            <Line type="monotone" dataKey="revenue" stroke="#3D7FFF" strokeWidth={2.5} dot={{ r: 3, fill: "#3D7FFF" }} />
            <Line type="monotone" dataKey="churn" stroke="#FF6B35" strokeWidth={2} dot={{ r: 3, fill: "#FF6B35" }} yAxisId="right" />
            <YAxis yAxisId="right" orientation="right" stroke="#8B92A5" fontSize={12} tickLine={false} axisLine={false} />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <Card style={{ overflow: "hidden" }}>
        <div style={{ padding: "18px 22px", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#F2F4F8", fontFamily: "'Space Grotesk', sans-serif" }}>Recent Transactions</div>
          <Button variant="ghost" small icon={Filter}>Filter</Button>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 700 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                {["Transaction", "Member", "Plan", "Amount", "Date", "Method", "Status"].map((h) => (
                  <th key={h} style={{ textAlign: "left", padding: "12px 18px", fontSize: 12, fontWeight: 600, color: "#8B92A5", textTransform: "uppercase", letterSpacing: "0.04em" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.id} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }} className="member-row">
                  <td style={{ padding: "13px 18px", fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#8B92A5" }}>{t.id}</td>
                  <td style={{ padding: "13px 18px", fontSize: 13, color: "#F2F4F8", fontWeight: 600 }}>{t.member}</td>
                  <td style={{ padding: "13px 18px", fontSize: 13, color: "#8B92A5" }}>{t.plan}</td>
                  <td style={{ padding: "13px 18px", fontSize: 13, color: "#F2F4F8", fontFamily: "'JetBrains Mono', monospace" }}>₹{t.amount.toLocaleString()}</td>
                  <td style={{ padding: "13px 18px", fontSize: 13, color: "#8B92A5" }}>{t.date}</td>
                  <td style={{ padding: "13px 18px", fontSize: 13, color: "#8B92A5" }}>{t.method}</td>
                  <td style={{ padding: "13px 18px" }}><StatusPill status={t.status === "paid" ? "paid" : "overdue"} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
export default BillingView;