import "../styles/Header.scss";
import { Link } from "react-router-dom";
import { UserSettingsModal } from ".";
import { apiEndpoint } from "../utils";

export const Header = () => {
  const user_id = localStorage.getItem("user_id");
  const isLogin = user_id !== null;
  const timestamp = new Date().getTime();
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
        {!isLogin && (
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
        )}
        {isLogin && (
          <div className="header-right d-flex align-items-center">
            <div
              className="user-avater btn"
              data-bs-toggle="modal"
              data-bs-target="#modal-user-settings"
            >
              <img
                src={`${apiEndpoint}/user_icon/${user_id}.png?t=${timestamp}`}
                alt="user avater"
                width={50}
              />
            </div>
          </div>
        )}
      </div>
      <UserSettingsModal />
    </div>
  );
};
