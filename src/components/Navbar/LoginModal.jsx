import { useState } from "react";

const LoginModal = ({ onClose }) => {
  const [showSuccess, setShowSuccess] = useState(false);
   const [loginType, setLoginType] = useState("");

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
              onClick={() => {
               setLoginType("user");
              setShowSuccess(true);
}}
            >
              Login
            </button>

             <p
  className="close-btn"
  onClick={() => {
    setLoginType("guest");
    setShowSuccess(true);
  }}
>
  Continue as Guest
</p>

          </div>
        </div>
      )}

      {showSuccess && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2 className="modal-title">
              {loginType === "guest"
                ? "Logged in as Guest User 🎉"
                : "Login Successful 🎉"}
            </h2>

            <p className="p__opensans" style={{ marginTop: "10px" }}>
  {loginType === "guest"
    ? "You are browsing as a guest user."
    : "Welcome back! You are now logged in."}
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
