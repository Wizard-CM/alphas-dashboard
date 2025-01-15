// Total Reward
export const totalRevenueData = {
  labels: ["2016", "2017", "2018", "2019", "2020"], // X-axis labels
  datasets: [
    {
      label: "Users Gained", // Dataset label
      data: [2000, 4000, 6000, 8000, 10000], // Y-axis data points
      backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill color for the line
      borderColor: "rgba(75, 192, 192, 1)", // Line color
      borderWidth: 2, // Width of the line
      pointBackgroundColor: "rgba(75, 192, 192, 1)", // Point color
    },
    {
      label: "Users Lossed", // Dataset label
      data: [1000, 2000, 4500, 5000, 3500], // Y-axis data points
      backgroundColor: "rgba(125, 255, 78, 0.2)", // Fill color for the line
      borderColor: "rgb(182, 37, 255)", // Line color
      borderWidth: 2, // Width of the line
      pointBackgroundColor: "rgb(182, 37, 255)", // Point color

      // Filling the bottom area
      fill: true,
      backgroundColor: "rgb(182, 37, 255,0.2)",
    },
  ],
};

export const totalRevenueOptions = {
  plugins: {
    legend: {
      display: false,
    },
  },
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false, // Hide x-axis grid lines
      },
    },
    y: {
      grid: {
        display: false, // Hide y-axis grid lines
      },
      // ticks: {
      //   display: false, // Hide x-axis labels
      // },
    },
  },
};

// Target Reality
export const targetRealityData = {
  labels: ["2016", "2017", "2018", "2019", "2020"], // X-axis labels
  datasets: [
    {
      label: "Revenue Generated", // Dataset label
      data: [5000, 7000, 9000, 12000, 15000], // Y-axis data points
      backgroundColor: "#FFCF00", // Fill color for the line
      borderColor: "#FFCF00", // Line color
      borderWidth: 1, // Width of the line
      pointBackgroundColor: "#FFCF00", // Point color
      barPercentage: 0.4,
    },
    {
      label: "Expenses Incurred", // Dataset label
      data: [3000, 4000, 5500, 7500, 9500], // Y-axis data points
      borderColor: "#4AB58E", // Line color
      borderWidth: 1, // Width of the line
      pointBackgroundColor: "#4AB58E", // Point color
      barPercentage: 1.0,

      // Filling the bottom area
      fill: true,
      backgroundColor: "#4AB58E",
    },
  ],
};

export const targetRealityOptions = {
  plugins: {
    legend: {
      display: false,
    },
  },
  responsive: true,
  scales: {
    x: {
      beginAtZero: true,
      grid: {
        display: false, // Hide x-axis grid lines
      },
    },
    y: {
      grid: {
        display: false, // Hide y-axis grid lines
      },
      ticks: {
        display: false, // Hide x-axis labels
      },
    },
  },
  barThickness: 15,
};

// customer satisfaction
export const customerSatisfactionData = {
  labels: ["", "", "", "", ""], // X-axis labels
  datasets: [
    {
      label: "Revenue Growth", // Dataset label
      data: [500, 600, 700, 1000, 800], // Y-axis data points
      borderColor: "rgba(7,224,254,0.7)", // Line color
      borderWidth: 2, // Width of the line
      pointBackgroundColor: "rgba(7,224,254,1)", // Point color

      fill: true,
      backgroundColor: "rgba(7,224,254,0.3)",
    },
    {
      label: "Expenses", // Dataset label
      data: [120, 250, 400, 650, 800], // Y-axis data points
      borderColor: "rgba(0, 255, 149, 0.7)", // Line color
      borderWidth: 2, // Width of the line
      pointBackgroundColor: "rgba(0, 255, 149, 1)", // Point color

      // Filling the bottom area
      fill: true,
      backgroundColor: "rgba(0, 255, 149, 0.3)",
    },
  ],
};
export const customerSatisfactionOptions = {
  plugins: {
    legend: {
      display: false,
    },
  },
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false, // Hide x-axis grid lines
      },
      ticks: {
        display: false, // Hide x-axis labels
      },
    },
    y: {
      grid: {
        display: false, // Hide y-axis grid lines
      },
      ticks: {
        display: false, // Hide x-axis labels
      },
    },
  },
};

// visitorInsightsData
export const visitorInsightsData = {
  // labels: ["Jan", "Feb", "Mar", "Apr", "May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"], // X-axis labels
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // X-axis labels
  datasets: [
    {
      label: "Unique Customer", // Dataset label
      // data: [30, 40, 10, 50, 15,20,45,30,80,95,70,67], // Y-axis data points
      data: [30, 40, 10, 50, 15, 20], // Y-axis data points
      borderColor: "rgb(60, 216, 86)", // Line color
      borderWidth: 5, // Width of the line
      pointRadius: 0,
    },
    {
      label: "New Customer", // Dataset label
      // data: [35, 45, 20, 30, 45,50,30,70,65,80,95,50], // Y-axis data points
      data: [35, 45, 20, 30, 45, 50], // Y-axis data points
      borderColor: "rgb(239, 68, 68)", // Line color
      borderWidth: 5, // Width of the line
      pointRadius: 0,
    },
    {
      label: "Loyal Customer", // Dataset label
      data: [20, 30, 15, 25, 45, 46, 60, 55, 75, 80, 90, 95], // Y-axis data points
      borderColor: "rgb(167, 0, 255)", // Line color
      borderWidth:5, // Width of the line
      pointRadius: 0,
    },
  ],
};
export const visitorInsightsOptions = {
  plugins: {
    legend: {
      display: false,
    },
  },
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false, // Hide x-axis grid lines
      },
    },
    y: {
      grid: {
        display: false, // Hide y-axis grid lines
      },
    },
  },
};
