export const ChatLeftSideBar = (props: { className?: string }) => {
  const { className } = props;
  return (
    <>
      <div className={`channel-left-bar ${className}`}>
        左サイドバー
        <button
          type="button"
          className="btn btn-outline-dark"
          data-bs-toggle="modal"
          data-bs-target="#modal-question"
        >
          質問する
        </button>
      </div>
    </>
  );
};
