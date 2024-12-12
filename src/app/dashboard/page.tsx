"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Data for the charts
  const lineChartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Revenue",
        data: [0, 20, 50, 100, 80, 120, 150, 200, 180, 220, 240, 250],
        borderColor: "#6C63FF",
        backgroundColor: "rgba(108, 99, 255, 0.3)",
        tension: 0.4,
      },
      {
        label: "Expenses",
        data: [0, 10, 30, 70, 60, 100, 140, 180, 150, 200, 230, 240],
        borderColor: "#00C9A7",
        backgroundColor: "rgba(0, 201, 167, 0.3)",
        tension: 0.4,
      },
    ],
  };

  const barChartData = {
    labels: ["12AM", "6AM", "12PM", "6PM", "12AM"],
    datasets: [
      {
        label: "Profit",
        data: [20, 40, 60, 80, 100],
        backgroundColor: "#FF6F61",
        borderRadius: 8,
      },
    ],
  };

  return (
    <div className="bg-bg-dash-board text-white min-h-screen p-10">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight">Welcome back, Omar</h1>
        <button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 px-5 py-3 rounded-lg shadow-md text-sm font-semibold">
          Create Report
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-bg-dash-board-card p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-lg font-medium">Pageviews</h2>
          <p className="text-3xl font-bold mt-2">50.8K <span className="text-green-400">+21.4%</span></p>
        </div>
        <div className="bg-bg-dash-board-card p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-lg font-medium">Monthly Users</h2>
          <p className="text-3xl font-bold mt-2">23.6K <span className="text-red-400">-10.2%</span></p>
        </div>
        <div className="bg-bg-dash-board-card p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-lg font-medium">New Signups</h2>
          <p className="text-3xl font-bold mt-2">756 <span className="text-green-400">+17.5%</span></p>
        </div>
        <div className="bg-bg-dash-board-card p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-lg font-medium">Subscriptions</h2>
          <p className="text-3xl font-bold mt-2">2.3K <span className="text-green-400">+18.3%</span></p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
        <div className="bg-bg-dash-board-card p-8 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-6">Total Revenue</h2>
          <Line data={lineChartData} options={{ responsive: true }} />
        </div>
        <div className="bg-bg-dash-board-card p-8 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-6">Total Profit</h2>
          <Bar data={barChartData} options={{ responsive: true }} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-bg-dash-board-card p-8 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-6">Users Overview</h2>
          <p className="text-4xl font-bold text-center">23,648</p>
          <div className="mt-6 flex justify-around">
            <div>
              <p className="text-sm">Desktop Users</p>
              <p className="text-lg font-semibold">15,624</p>
            </div>
            <div>
              <p className="text-sm">Phone Users</p>
              <p className="text-lg font-semibold">5,546</p>
            </div>
            <div>
              <p className="text-sm">Laptop Users</p>
              <p className="text-lg font-semibold">2,478</p>
            </div>
          </div>
        </div>
        <div className="bg-bg-dash-board-card p-8 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-6">Recent Orders</h2>
          <ul>
            <li className="flex justify-between border-b border-gray-700 py-3">
              <span>#1024</span>
              <span>Dec 29, 2024</span>
              <span className="text-green-400">Complete</span>
              <span>$220.84</span>
            </li>
            <li className="flex justify-between border-b border-gray-700 py-3">
              <span>#1023</span>
              <span>Dec 28, 2024</span>
              <span className="text-yellow-400">Pending</span>
              <span>$104.65</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
