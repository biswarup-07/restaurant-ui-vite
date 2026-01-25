import { useState } from "react";

const LoginModal = ({ onClose }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <>
      {!showSuccess && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2 className="modal-title">Welcome Back</h2>

            <input
              type="email"
              placeholder="Email address"
              className="modal-input"
            />

            <input
              type="password"
              placeholder="Password"
              className="modal-input"
            />

            <button
              type="button"
              className="primary-btn modal-login-btn"
              onClick={() => setShowSuccess(true)}
            >
              Login
            </button>

            <p className="close-btn" onClick={onClose}>
              Close
            </p>
          </div>
        </div>
      )}

      {showSuccess && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2 className="modal-title">Login Successful 🎉</h2>

            <p className="p__opensans" style={{ marginTop: "10px" }}>
              Welcome back! You are now logged in.
            </p>

            <button
              className="primary-btn modal-login-btn"
              style={{ marginTop: "20px" }}
              onClick={onClose}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
