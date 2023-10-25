import { useParams } from "react-router-dom";
import { Header } from "../components";
import {
  ChatMain,
  ChatLeftSideBar,
<<<<<<< HEAD
  ChatRightSideBar,
=======
  ChatRightSideBar
>>>>>>> 3bc80954e920a969ce54957165e242d138ae105e
} from "../components/chat";

export const Channel = () => {
  const { chennelId } = useParams();
  return (
    <>
      <Header />
      <div className="d-flex justify-content-between">
        <ChatLeftSideBar className="w-25" />
        <ChatMain channelId={Number(chennelId)} className="w-100" />
        <ChatRightSideBar className="w-25" />
      </div>
    </>
  );
};
