import { Header } from "../components";
import { ChannelCard } from "../components";
import { Channel } from "../types";
import { ChannelEntryModal } from "../components";

const dummyTags = [
  {
    id: 1,
    name: "JavaScript",
  },
  {
    id: 2,
    name: "C言語",
  },
  {
    id: 3,
    name: "Python",
  },
];

const dummyChannels: Channel[] = [
  {
    id: 1,
    name: "チャンネル1",
    description: "チャンネル1の説明",
    is_anonymous: true,
    owner_id: 1,
    tags: dummyTags,
  },
  {
    id: 2,
    name: "チャンネル2",
    description: "チャンネル2の説明",
    is_anonymous: false,
    owner_id: 1,
    tags: dummyTags,
  },
  {
    id: 3,
    name: "チャンネル3",
    description: "チャンネル3の説明",
    is_anonymous: false,
    owner_id: 1,
    tags: dummyTags,
  },
  {
    id: 4,
    name: "チャンネル4",
    description: "チャンネル4の説明",
    is_anonymous: false,
    owner_id: 1,
    tags: dummyTags,
  },
];

export const Select = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="tag-select">
          <select className="form-select my-8 w-auto" aria-label="tag select">
            <option selected disabled className="d-none">
              タグ選択
            </option>
            {dummyTags.map((tag) => (
              <option value={tag.id} key={tag.id}>
                {tag.name}
              </option>
            ))}
          </select>
        </div>
        <div className="channel-world-list">
          <div className="in-group d-flex">
            <div className="fs-2 fw-bold">参加しているグループ</div>
            <div className="fs-5 fw-medium ms-6 align-self-end text-decoration-underline">
              もっとみる
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-4 gy-3 mt-5">
            {dummyChannels.map((channel) => (
              <div
                className="col user-select-none"
                key={channel.id}
                data-bs-toggle="modal"
                data-bs-target={`#modal-chennel-${channel.id}`}
              >
                <ChannelCard channel={channel} />
              </div>
            ))}
          </div>
        </div>
        <div className="channel-group-list mt-9">
          <div className="fs-2 fw-bold">チャンネルをさがす</div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-4 gy-3 mt-5">
            {dummyChannels.map((channel) => (
              <div
                className="col user-select-none"
                key={channel.id}
                data-bs-toggle="modal"
                data-bs-target={`#modal-chennel-${channel.id}`}
              >
                <ChannelCard channel={channel} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {
        // モーダル
        dummyChannels.map((channel) => (
          <ChannelEntryModal channel={channel} key={channel.id} />
        ))
      }
    </>
  );
};
