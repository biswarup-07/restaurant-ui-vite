import { useState } from "react";

const BookTableModal = ({ onClose }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  // 🔒 Today date (YYYY-MM-DD)
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2 className="modal-title">Book A Table</h2>

        <input
          type="text"
          placeholder="Your Name"
          className="modal-input"
        />

        <input
          type="date"
          min={today}        /* 👈 past date blocked */
          className="modal-input"
        />

        <input
          type="time"
          className="modal-input"
        />

        <input
          type="number"
          min="1"
          max="20"
          placeholder="Guests"
          className="modal-input"
        />

       <button
       type="button"
       className="primary-btn modal-login-btn"
       onClick={() => setShowSuccess(true)}
        >
        Confirm Booking
        </button>


        <p className="close-btn" onClick={onClose}>
          Close
        </p>

        {showSuccess && (
  <div className="modal-overlay">
    <div className="modal-box">
      <h2 className="modal-title">Table Booked 🍽️</h2>

      <p className="p__opensans" style={{ marginTop: "10px" }}>
        Your table has been successfully booked.
      </p>

      <button
        className="primary-btn modal-login-btn"
        style={{ marginTop: "20px" }}
        onClick={() => {
          setShowSuccess(false);
          onClose();
        }}
      >
        OK
      </button>
    </div>
  </div>
)}


      </div>
    </div>
  );
};

export default BookTableModal;
