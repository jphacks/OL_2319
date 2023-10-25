import { useParams } from "react-router-dom";
import { Header } from "../components";
import {
  ChatMain,
  ChatLeftSideBar,
  ChatRightSideBar,
} from "../components/chat";
import { ChannelExitModal } from "../components/ChannelExitModal";


export const Channel = () => {
  const { chennelId } = useParams();
  return (
    <>
      <Header />
      <div className="d-flex justify-content-between">
        <ChatLeftSideBar className="w-25" />
        <ChatMain channelId={Number(chennelId)} className="w-100" />
        <ChatRightSideBar className="w-25" />
        <ChannelExitModal />
      </div>
    </>
  );
};
