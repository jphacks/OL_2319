import { HandlePage } from "./UserSettingsModal";
import { apiEndpoint } from "../../utils";

export const UserSettingsTop = (props: {
  className?: string;
  handlePage: HandlePage;
}) => {
  const { className, handlePage } = props;

  return (
    <>
      <div className="btn-close ms-auto" data-bs-dismiss="modal"></div>
      <div className={`user-settings-content d-flex ${className}`}>
        <div className="user-settings-left text-center">
          <div className="user-avater">
            <img
              src={`${apiEndpoint}/user_icon/${localStorage.getItem("user_id")}.png`}
              alt="user avater"
              width={120}
            />
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary mt-4 fw-bold px-4 py-3 lh-1"
              onClick={() => handlePage("create-channel")}
            >
              チャンネルを作成
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-outline-dark mt-4 fw-bold px-4 py-3 lh-1"
              onClick={() => handlePage("top")}
            >
              参加中チャンネル
            </button>
          </div>
        </div>
        <div className="user-settings-right ms-9 flex-grow-1">
          <div
            className="fs-4 fw-medium"
            onClick={() => handlePage("update-name")}
          >
            ニックネーム変更
          </div>
          <hr className="w-100" />
          <div
            className="fs-4 fw-medium"
            onClick={() => handlePage("update-email")}
          >
            メールアドレス変更
          </div>
          <hr className="w-100" />
          <div
            className="fs-4 fw-medium"
            onClick={() => handlePage("update-password")}
          >
            パスワード変更
          </div>
          <hr className="w-100" />
          <div
            className="fs-4 fw-medium"
            onClick={() => handlePage("update-tags")}
          >
            タグ変更
          </div>
          <hr className="w-100" />
          <div
            className="fs-4 fw-medium text-danger"
            data-bs-dismiss="modal"
            onClick={() => {
              localStorage.removeItem("user_id");
              window.location.href = "/";
            }}
          >
            ログアウト
          </div>
        </div>
      </div>
    </>
  );
};
