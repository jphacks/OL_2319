import { Channel } from "../types";

export const ChannelCard = (props: {
  channel: Channel;
  className?: string;
}) => {
  const { channel, className } = props;
  const icon = channel.is_anonymous ? "/mdi_earth.svg" : "/mdi_group-fill.svg";

  return (
    <>
      <div className={`card ${className}`}>
        <div className="card-header bg-primary py-3 px-4 d-flex align-items-center">
          <div className="channel-icon">
            <img src={icon} alt="channel icon" width={32} />
          </div>
          <div className="channel-name fw-bold ms-3">{channel.name}</div>
          <span className="badge bg-secondary ms-3"></span>
        </div>
        <div className="card-body fs-6 p-4">{channel.description}</div>
      </div>
    </>
  );
};
