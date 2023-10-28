import { HandlePage } from "./UserSettingsModal";
import { api, apiEndpoint } from "../../utils";
import { useRef } from "react";

export const UserSettingsTop = (props: {
  className?: string;
  handlePage: HandlePage;
}) => {
  const { className, handlePage } = props;
  const inputIcon = useRef<HTMLInputElement>(null);
  const timestamp = new Date().getTime();

  const updateIcon = async () => {
    if (inputIcon.current === null) return;
    const file = inputIcon.current.files?.[0];
    if (file === undefined) return;
    const clippedFile = await clipToSquare(file);
    api
      .post(`/users/update`, {
        id: localStorage.getItem("user_id"),
        icon: clippedFile,
      })
      .then(() => {});
  };

  const clipToSquare = async (file: File): Promise<File | null> => {
    const size = 200;

    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const image = new Image();
        image.src = String(event.target?.result);

        image.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          // 正方形のキャンバスを作成
          canvas.width = size;
          canvas.height = size;

          // 画像を正方形にクリップ
          ctx?.drawImage(
            image,
            0,
            0,
            image.width,
            image.height,
            0,
            0,
            size,
            size,
          );

          // クリップされた画像をデータURLとして取得
          canvas.toBlob((blob) => {
            if (blob === null) return;
            // BlobをFileに変換
            const fileName = file.name; // ファイル名
            const mimeType = file.type; // MIMEタイプ
            const clippedFile = new File([blob], fileName, { type: mimeType });

            // コールバック関数でFileオブジェクトを返す
            resolve(clippedFile);
          }, file.type);
        };
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      <div className="btn-close ms-auto" data-bs-dismiss="modal"></div>
      <div className={`user-settings-content d-flex ${className}`}>
        <div className="user-settings-left text-center">
          <div className="user-avater">
            <button
              type="button"
              onClick={() => {
                if (inputIcon.current) {
                  inputIcon.current.click();
                }
              }}
            >
              <img
                src={`${apiEndpoint}/user_icon/${localStorage.getItem(
                  "user_id",
                )}.png?t=${timestamp}`}
                alt="user avater"
                width={120}
              />
            </button>
            <input
              type="file"
              name="icon"
              id="user-icon"
              className="d-none"
              aria-label="icon update"
              ref={inputIcon}
              onChange={updateIcon}
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
