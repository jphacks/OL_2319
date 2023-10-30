import { useParams } from "react-router-dom";
import { useMemo } from "react";
import {
  Header,
  ChatMain,
  ChatLeftSideBar,
  ChatRightSideBar,
  ChannelExitModal,
  ChannelEditModal,
  ChannelDeleteModal,
  QuestionModal,
} from "../components";
import ActionCable from "actioncable";

export const Channel = () => {
  const { channelId } = useParams<{ channelId: string }>();
  const cable: ActionCable.Cable = useMemo(
    () => ActionCable.createConsumer("ws://localhost:3000/cable"),
    [],
  );

  return (
    <>
      <Header />
      <div className="d-flex justify-content-between">
        <ChatLeftSideBar className="px-7" />
        <ChatMain
          channelId={Number(channelId)}
          className="flex-grow-1 w-10"
          cable={cable}
        />
        <ChatRightSideBar className="px-3 py-5" cable={cable}/>
      </div>
      <ChannelExitModal />
      <ChannelEditModal />
      <ChannelDeleteModal />
      <QuestionModal />
    </>
  );
};
