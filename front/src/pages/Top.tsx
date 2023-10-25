import "../styles/Header.scss";
import "../styles/Top.scss";
import { Header } from "../components/Header";
import { Link } from "react-router-dom";

export const Top = () => {
  return (
    <>
      <Header />
      <div className="hero-image pb-7">
        <div className="container">
          <img src="/top-image.png" alt="helo image" />
          <div className="hero-text text-center mt-5">
            <h2 className="fw-bold">
              エンジニア初学者コミュニティへようこそ！
            </h2>
            <Link to="/select">
              <button
                type="button"
                className="btn btn-dark fw-bold fs-4 text-white mt-4 px-4 py-3 lh-1"
              >
                チャンネルをさがす
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
