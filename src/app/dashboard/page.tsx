"use client";
import React, { useMemo } from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

export default function Dashboard() {
  // Static chart data
  const lineChartData = useMemo(() => ({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Revenue",
        data: [50, 100, 150, 200, 250, 125, 175, 225, 275, 200, 150, 100],
        borderColor: "#4F46E5",
        backgroundColor: "rgba(79, 70, 229, 0.3)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Expenses",
        data: [30, 70, 100, 150, 200, 100, 130, 170, 200, 150, 120, 80],
        borderColor: "#9333EA",
        backgroundColor: "rgba(147, 51, 234, 0.3)",
        fill: true,
        tension: 0.4,
      },
    ],
  }), []);

  const barChartData = useMemo(() => ({
    labels: ["12 AM", "4 AM", "8 AM", "12 PM", "4 PM", "8 PM", "12 AM"],
    datasets: [
      {
        label: "Sessions",
        data: [50, 75, 100, 150, 200, 175, 125],
        backgroundColor: "#10B981",
        borderRadius: 5,
      },
    ],
  }), []);

  const doughnutChartData = useMemo(() => ({
    labels: ["Desktop Users", "Phone App Users", "Laptop Users"],
    datasets: [
      {
        data: [15624, 5546, 2478],
        backgroundColor: ["#4F46E5", "#9333EA", "#10B981"],
        hoverOffset: 5,
      },
    ],
  }), []);

  const recentOrders = [
    { id: "#1526", amount: "$230.44" },
    { id: "#1527", amount: "$120.89" },
    { id: "#1528", amount: "$98.24" },
    { id: "#1529", amount: "$150.67" },
    { id: "#1530", amount: "$75.88" },
  ];

  return (
    <section className="bg-slate-800 p-10 min-h-screen">
      <div className="container mx-auto space-y-12 animate-fade-in">
        {/* Header */}
        <div className="text-center text-4xl font-semibold text-gray-100">
          <h1>Welcome to the Dashboard</h1>
        </div>

        {/* Top Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {["Pageviews", "Monthly Users", "New Signups", "Subscriptions"].map((metric, index) => (
            <div
              key={index}
              className="bg-[#0B1739] text-gray-100 p-6 rounded-lg text-center shadow-md hover:bg-[#CB3CFF] hover:text-[#0B1739] transition"
            >
              <h2 className="text-xl font-medium">{metric}</h2>
              <p className="text-3xl font-semibold">
                {index === 0
                  ? "50.8K"
                  : index === 1
                  ? "23.6K"
                  : index === 2
                  ? "756"
                  : "2.3K"}
              </p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Line Chart */}
          <div className="bg-[#0B1739] text-gray-100 p-6 rounded-lg shadow-md lg:col-span-2">
            <h3 className="text-xl font-medium mb-4">Total Revenue</h3>
            <Line
              data={lineChartData}
              options={{
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 2,
                plugins: {
                  legend: {
                    position: "top",
                    labels: {
                      color: "#FFFFFF", // Make legend text white for dark backgrounds
                      font: {
                        size: 14,
                      },
                    },
                  },
                  tooltip: {
                    backgroundColor: "#1E293B", // Dark background for tooltip
                    titleColor: "#FFFFFF", // White title
                    bodyColor: "#FFFFFF", // White text inside tooltip
                    callbacks: {
                      label: (context) => {
                        const dataset = context.dataset;
                        const currentValue = Number(context.raw) || 0;
                        const previousValue = Number(dataset.data[context.dataIndex - 1]) || 0;
                        const percentageChange =
                          previousValue !== 0 ? (((currentValue - previousValue) / previousValue) * 100).toFixed(2) : "0.00";
                        return `${dataset.label}: ${currentValue}K (${percentageChange}% change)`;





















                      },                    
                    },
                  },
                },
                scales: {
                  x: {
                    grid: {
                      display: false,
                    },
                    ticks: {
                      color: "#FFFFFF", // White text for x-axis labels
                    },
                  },
                  y: {
                    grid: {
                      color: "rgba(255, 255, 255, 0.2)", // Faint white gridlines
                    },
                    ticks: {
                      color: "#FFFFFF", // White text for y-axis labels
                    },
                    title: {
                      display: true,
                      text: "Revenue ($K)",
                      color: "#FFFFFF",
                      font: {
                        size: 14,
                      },
                    },
                  },
                },
              }}
            />
          </div>

          {/* Bar Chart */}
          <div className="bg-[#0B1739] text-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-4">Total Profit</h3>
            <Bar
              data={barChartData}
              options={{
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 2,
                plugins: {
                  tooltip: {
                    callbacks: {

                      label: (context) => `${context.dataset.label}: ${context.raw || 0}K`,
                    },
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Reports Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Doughnut Chart */}
          <div className="bg-[#0B1739] text-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-4">Users by Device</h3>
            <Doughnut
              data={doughnutChartData}
              options={{
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: (context) => `${context.label}: ${context.raw}`,
                    },
                  },
                },
              }}
            />
          </div>

          {/* Recent Orders */}
          <div className="bg-[#0B1739] text-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-4">Recent Orders</h3>
            <ul className="space-y-2 max-h-48 overflow-y-auto">
              {recentOrders.map((order, index) => (
                <li key={index} className="flex justify-between border-b border-gray-600 py-2">
                  <span>Order {order.id}</span>
                  <span>{order.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
 
);

}