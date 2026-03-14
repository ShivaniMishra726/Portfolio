"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { motion } from "framer-motion";
import type { AcademicRecord } from "@/lib/types";

interface SGPAChartProps {
  data: AcademicRecord[];
  average: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-3 text-sm">
        <p className="font-semibold text-gray-800 dark:text-white">{label}</p>
        <p className="text-primary-500 font-bold">SGPA: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

export default function SGPAChart({ data, average }: SGPAChartProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-heading font-semibold text-gray-900 dark:text-white">
          Semester Performance
        </h3>
        <div className="px-3 py-1.5 rounded-full bg-primary-50 dark:bg-primary-500/10">
          <span className="text-sm font-bold text-primary-500">Avg: {average}</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(123, 45, 139, 0.1)" />
          <XAxis
            dataKey="semester"
            tick={{ fontSize: 13, fontFamily: "Inter" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={[7, 10]}
            tick={{ fontSize: 12, fontFamily: "Inter" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="sgpa" radius={[6, 6, 0, 0]} maxBarSize={60}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  index === data.reduce((maxI, d, i, arr) =>
                    d.sgpa > arr[maxI].sgpa ? i : maxI, 0)
                    ? "#7B2D8B"
                    : "#C084D4"
                }
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
