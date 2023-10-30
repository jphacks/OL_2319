import { useEffect, useState } from "react";
import { EntryList } from "./EntryList";
import ActionCable from "actioncable";
import { api } from "../../utils";
import { useParams } from "react-router-dom";
import { User, UserResponse } from "../../types";

export const ChatRightSideBar = (props: { className: string, cable: ActionCable.Cable }) => {
  const { className, cable } = props;
  // const [subscription, setSubscription] = useState<ActionCable.Channel>();
  const [users, setUsers] = useState<User[]>([]);
  const { channelId } = useParams<{ channelId: string }>();

  const  fetchActiveUsers = async () => {
    await api.get(`/entries/active/${channelId}`)
      .then((res) => {
        setUsers(res.data.map((e: UserResponse) => {
          return {
            id: e.user_id,
            name: e.user_name,
          } as User
        }) );
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    fetchActiveUsers();
    const sub = cable?.subscriptions.create(
      {
        channel: "EntryChannel",
        channel_id: channelId,
        user_id: localStorage.getItem("user_id"),
      },
      {
        received: async () => {
          await fetchActiveUsers();
        },
      },
    );
    return () => {
      sub.unsubscribe();
    };
  }
  // eslint-disable-next-line
  , []);

  return (
    <>
      <div className={`channel-right-bar ${className}`}>
        <EntryList users={users}/>
      </div>
    </>
  );
};
