import { useParams } from "react-router-dom";
import {
  Header,
  ChatMain,
  ChatLeftSideBar,
  ChatRightSideBar,
  ChannelExitModal,
  ChannelEditModal,
  ChannelDeleteModal,
} from "../components";

export const Channel = () => {
  const { channelId } = useParams<{ channelId: string }>();
  return (
    <>
      <Header />
      <div className="d-flex justify-content-between">
        <ChatLeftSideBar className="w-25" />
        <ChatMain channelId={Number(channelId)} className="w-100" />
        <ChatRightSideBar className="w-25" />
        <ChannelExitModal />
        <ChannelEditModal />
        <ChannelDeleteModal />
      </div>
    </>
  );
};
