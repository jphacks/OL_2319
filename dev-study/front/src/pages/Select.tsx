import { AlertToast, Header } from "../components";
import { ChannelCard } from "../components";
import { Channel, Tag } from "../types";
import { ChannelEntryModal } from "../components";
import { dummyTags } from "../types";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { api } from "../utils";

export const Select = () => {
  const [selectedTag, setSelectedTag] = useState<string>("タグ選択");
  const [alertType, setAlertType] = useState<"success" | "error" | undefined>(
    undefined,
  );
  const [alertStr, setAlertStr] = useState<string>("");
  const [channels, setChannels] = useState<Channel[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);

  const [searchParams, setSearchParams] = useSearchParams();
  let isLoaded = false;
  useEffect(() => {
    if (isLoaded) return;
    if (searchParams.get("prev") === "login") {
      setAlertStr("ログインが完了しました。");
      setAlertType("success");
      setSearchParams({});
    }
    // チャンネル一覧取得
    api
      .get("/channels/get-all")
      .then((res) => {
        if (res.data.channels === undefined) return;
        setChannels(res.data.channels);
      })
      .catch(() => {
        setAlertStr("チャンネルの取得に失敗しました。");
        setAlertType("error");
      });
    // タグ一覧取得
    api
      .get("/tag/get-all")
      .then((res) => {
        setTags(res.data.tags as Tag[]);
      })
      .catch(() => {
        setAlertStr("タグの取得に失敗しました。");
        setAlertType("error");
      });
    isLoaded = true;
  }, []);

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
            {tags.map((tag: Tag) => (
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
            {/* {channels.map((channel: Channel) => (
              <div
                className="col user-select-none"
                key={`group-${channel.id}`}
                data-bs-toggle="modal"
                data-bs-target={`#modal-chennel-${channel.id}`}
              >
                <ChannelCard channel={channel} />
              </div>
            ))} */}
          </div>
        </div>
        <div className="channel-group-list mt-9">
          <div className="fs-2 fw-bold">チャンネルをさがす</div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-4 gy-3 mt-5">
            {channels
              .filter((channel) =>
                channel.tags.some((tag) => {
                  if (selectedTag === "タグ選択") return true;
                  return tag.id === Number(selectedTag);
                }),
              )
              .map((channel) => (
                <div
                  className="col user-select-none"
                  key={channel.id}
                  data-bs-toggle="modal"
                  data-bs-target={`#modal-chennel-${channel.id}`}
                >
                  <ChannelCard channel={channel} selectedTag={selectedTag} />
                </div>
              ))}
          </div>
        </div>
      </div>
      {
        // モーダル
        channels.map((channel) => (
          <ChannelEntryModal channel={channel} key={channel.id} />
        ))
      }
      <AlertToast
        alertType={alertType}
        alertStr={alertStr}
        setAlertType={setAlertType}
      />
    </>
  );
};
