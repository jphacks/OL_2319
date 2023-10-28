import { apiEndpoint } from "../../utils";

export const ChatLeftSideBar = (props: { className?: string }) => {
  const { className } = props;
  return (
    <>
      <div
        className={`channel-left-bar text-center bg-primary d-flex flex-column align-items-center ${className}`}
      >
        <button
          type="button"
          className="btn btn-back mt-7"
          data-bs-toggle="modal"
          data-bs-target="#modal-channel-exit"
        >
          <img src="/arrow-back.svg" alt="back" width={40} />
        </button>
        <div
          className="user-avater mt-7"
          data-bs-toggle="modal"
          data-bs-target="#modal-user-settings"
        >
          <img src={`${apiEndpoint}/user_icon/${localStorage.getItem("user_id")}.png`} alt="user avater" width={150} />
        </div>
        <div className="bg-white mt-7 rounded">
          <button
            type="button"
            className="btn btn-outline-dark fw-bold fs-6 px-4 py-2"
            data-bs-toggle="modal"
            data-bs-target="#modal-question"
          >
            質問する
          </button>
        </div>
      </div>
    </>
  );
};
