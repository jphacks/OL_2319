import { Header } from "../components";
import { ChannelCard } from "../components";
import { Channel, Tag } from "../types";
import { ChannelEntryModal } from "../components";
import { dummyChannels } from "../types";
import { useState } from "react";

export const Group = () => {
  const [selectedTag, setSelectedTag] = useState<string>("タグ選択");

  // タグリスト作成
  const tagList = new Set<Tag>();
  dummyChannels.forEach((channel: Channel) => {
    channel.tags.forEach((tag) => {
      tagList.add(tag);
    });
  });

  return (
    <>
      <Header />
      <div className="container">
        <div className="tag-select">
          <select
            className="form-select my-8 w-auto"
            aria-label="tag select"
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
          >
            <option selected disabled className="d-none">
              タグ選択
            </option>
            {[...tagList].map((tag: Tag) => (
              <option value={tag.id} key={tag.id}>
                {tag.name}
              </option>
            ))}
          </select>
        </div>
        <div className="channel-world-list">
          <div className="in-group d-flex">
            <div className="fs-2 fw-bold">参加しているグループ</div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-4 gy-3 mt-5">
            {dummyChannels.map((channel: Channel) => (
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
