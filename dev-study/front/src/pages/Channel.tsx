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
        <ChatLeftSideBar className="w-25" />
        <ChatMain
          channelId={Number(channelId)}
          className="w-75"
          cable={cable}
        />
        <ChatRightSideBar className="w-25" />
        <ChannelExitModal />
        <ChannelEditModal />
        <ChannelDeleteModal />
        <QuestionModal />
      </div>
    </>
  );
};
