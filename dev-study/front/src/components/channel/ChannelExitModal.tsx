import { ModalBase } from "../_ModalBase";
import { Link } from "react-router-dom";

export const ChannelExitModal = (props: { className?: string }) => {
  const { className } = props;

  const ModalContent = () => (
    <>
      <div className={className}>
        <div className="channel-title fs-4 fw-bold mt-3">
          チャンネルから退出しますか
        </div>
        <div className="mt-6 mb-4">
          <Link to={`/select`}>
            <button
              type="button"
              className="btn btn-danger fw-bold me-5 px-4 py-3 lh-1 fs-5"
              data-bs-dismiss="modal"
            >
              退出する
            </button>
          </Link>
          <button
            type="button"
            className="btn btn-outline-dark fw-bold px-4 py-3 lh-1 fs-5"
            data-bs-dismiss="modal"
          >
            キャンセル
          </button>
        </div>
      </div>
    </>
  );

  return (
    <>
      <ModalBase children={<ModalContent />} id={`modal-channel-exit`} />
    </>
  );
};
