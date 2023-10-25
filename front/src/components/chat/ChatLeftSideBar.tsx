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
        <div className="user-avater mt-7">
          <img src="http://placekitten.com/200" alt="user avater" width={150} />
        </div>
        <button
          type="button"
          className="btn btn-outline-dark bg-white fw-bold fs-6 px-4 py-2 mt-7"
          data-bs-toggle="modal"
          data-bs-target="#modal-question"
        >
          質問する
        </button>
      </div>
    </>
  );
};
