import { useState, useRef } from "react";
import "./BookingForm.css";

function formatDate(date) {
  if (!date) return "";
  const d = new Date(date);
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

const today = new Date().toISOString().split("T")[0];

function BookingForm() {
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(today);
  const [room, setRoom] = useState("1");

  const inRef = useRef();
  const outRef = useRef();
  const roomRef = useRef();

  return (
    <div className="booking-form-bar">
      <div className="form-group">
        <label className="form-label">Check In</label>
        <div
          className="custom-date"
          tabIndex={0}
          onClick={() => inRef.current && inRef.current.showPicker ? inRef.current.showPicker() : inRef.current.focus()}
        >
          <span className="date-text">{formatDate(checkIn)}</span>
          <span className="calendar-icon">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <rect x="4" y="7" width="16" height="13" rx="2" stroke="#B39B72" strokeWidth="1.5"/>
              <path d="M8 4V2.5M16 4V2.5" stroke="#B39B72" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M4 7h16" stroke="#B39B72" strokeWidth="1.5"/>
            </svg>
          </span>
          <input
            ref={inRef}
            type="date"
            className="native-date"
            value={checkIn}
            min={today}
            onChange={e => setCheckIn(e.target.value)}
            tabIndex={-1}
            aria-label="Check In Date"
          />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">Check Out</label>
        <div
          className="custom-date"
          tabIndex={0}
          onClick={() => outRef.current && outRef.current.showPicker ? outRef.current.showPicker() : outRef.current.focus()}
        >
          <span className="date-text">{formatDate(checkOut)}</span>
          <span className="calendar-icon">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <rect x="4" y="7" width="16" height="13" rx="2" stroke="#B39B72" strokeWidth="1.5"/>
              <path d="M8 4V2.5M16 4V2.5" stroke="#B39B72" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M4 7h16" stroke="#B39B72" strokeWidth="1.5"/>
            </svg>
          </span>
          <input
            ref={outRef}
            type="date"
            className="native-date"
            value={checkOut}
            min={checkIn}
            onChange={e => setCheckOut(e.target.value)}
            tabIndex={-1}
            aria-label="Check Out Date"
          />
        </div>
      </div>

    <div className="form-group">
  <label className="form-label">Room</label>
  <div
    className="custom-select"
    tabIndex={0}
    onClick={() => roomRef.current && roomRef.current.focus()}
  >
    <span className="date-text">{room}</span>
    <span className="dropdown-arrow">
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <path d="M6 8l4 4 4-4" stroke="#B39B72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
    <select
      ref={roomRef}
      className="native-select"
      value={room}
      onChange={e => setRoom(e.target.value)}
      aria-label="Room"
      tabIndex={-1}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
  </div>
</div>
      <button className="check-btn">
        Check Availability <span className="arrow">&#8594;</span>
      </button>
    </div>
  );
}

export default BookingForm;
