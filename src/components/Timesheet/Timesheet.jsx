import React from "react";
import { Search, FileText, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Timesheet.css";

const employees = [
  {
    name: "Ralph Edwards",
    role: "Product Designer",
    type: "Fulltime",
    regular: 172,
    overtime: 24,
    sick: 48,
    pto: "-",
    holiday: 20,
    total: 264,
  },
  {
    name: "Arlene McCoy",
    role: "UX Researcher",
    type: "Fulltime",
    regular: 160,
    overtime: "-",
    sick: "-",
    pto: 50,
    holiday: "-",
    total: 210,
  },
  {
    name: "Wade Warren",
    role: "QA Engineer",
    type: "Contractor",
    regular: 178,
    overtime: "-",
    sick: "-",
    pto: 74,
    holiday: "-",
    total: 252,
  },
];

const Timesheet = () => {
  const navigate = useNavigate();

  const handleRowClick = (index) => {
    navigate(`/employee/${index}`);
  };

  return (
    <div className="container">
      {/* Main Content */}
      <div className="main">
        <h1 className="title">Time & Attendance</h1>

        {/* Tabs */}
        <div className="tabs">
          <button className="tab active">Timesheet</button>
          <button className="tab">Time-off request</button>
          <button className="tab">Time-off policy</button>
        </div>

        {/* Period Selector */}
        <div className="period">
          <div>
            <p className="period-label">Time period:</p>
            <p className="period-value">1st Jun – 31st Jul 2022</p>
          </div>
          <div className="buttons">
            <button className="btn light">
              <FileText size={16} /> Create Report
            </button>
            <button className="btn light">
              <Settings size={16} /> Setting
            </button>
          </div>
        </div>

        {/* Calendar Bar */}
        <div className="calendar">
          {[...Array(31)].map((_, i) => (
            <div key={i} className={`day ${i < 21 ? "green" : "red"}`}>
              {i + 1}
            </div>
          ))}
        </div>

        {/* Search & Buttons */}
        <div className="search-bar">
          <div className="search">
            <Search className="search-icon" size={18} />
            <input type="text" placeholder="Search employee" />
          </div>
          <div className="actions">
            <button className="btn outline">Remind Approvers</button>
            <button className="btn primary">Send to Payroll</button>
          </div>
        </div>

        {/* Table */}
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Regular</th>
              <th>Overtime</th>
              <th>Sick Leave</th>
              <th>PTO</th>
              <th>Paid Holiday</th>
              <th>Total Hour</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, i) => (
              <tr key={i} onClick={() => handleRowClick(i)} className="clickable-row">
                <td>
                  <p className="name">{emp.name}</p>
                  <p className="role">{emp.role}</p>
                </td>
                <td>{emp.type}</td>
                <td>{emp.regular} Hours</td>
                <td>{emp.overtime} Hours</td>
                <td>{emp.sick} Hours</td>
                <td>{emp.pto}</td>
                <td>{emp.holiday} Hours</td>
                <td>{emp.total} Hours</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timesheet;
