import { ModalBase } from "./_ModalBase";
import { Channel, Tag } from "../types";
import { Link } from "react-router-dom";

export const ChannelEntryModal = (props: {
  channel: Channel;
  className?: string;
}) => {
  const { channel, className } = props;

  const ModalContent = () => (
    <>
      <div className={className}>
        <div className="channel-title fs-4 fw-bold">{channel.name}</div>
        <div className="channel-description my-3 fs-6">
          {channel.description}
        </div>
        <div className="channel-tags">
          {channel.tags.map((tag: Tag) => (
            <span
              className="badge bg-secondary me-5 fw-medium fs-6"
              key={tag.id}
            >
              {tag.name}
            </span>
          ))}
        </div>
        <div className="mt-5">
          <Link to={`/channel/${channel.id}`}>
            <button
              type="button"
              className="btn btn-primary fw-bold me-3 px-4 py-3 lh-1 fs-5"
              data-bs-dismiss="modal"
            >
              チャンネルに参加する
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
      <ModalBase
        children={<ModalContent />}
        id={`modal-chennel-${channel.id}`}
      />
    </>
  );
};
