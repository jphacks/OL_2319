import "../styles/Header.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header bg-gray-700">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <div className="header-left d-flex align-items-center">
          <div className="logo me-3">
            <Link to="/">
              <img src="/logo.svg" alt="logo" height={59} />
            </Link>
          </div>
          <div className="search-channel text-primary text-center me-3 ms-7 fw-bold">
            <Link to="/select">チャンネルをさがす</Link>
          </div>
        </div>
        <div className="header-right d-flex align-items-center">
          <div className="login ms-3">
            <Link to="/login">
              <button
                type="button"
                className="btn btn-outline-primary fw-bold px-4 py-3 fs-5 lh-1"
              >
                ログイン
              </button>
            </Link>
          </div>
          <div className="signup ms-3">
            <Link to="/signup">
              <button
                type="button"
                className="btn btn-primary fw-bold px-4 py-3 fs-5 lh-1"
              >
                新規登録
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
