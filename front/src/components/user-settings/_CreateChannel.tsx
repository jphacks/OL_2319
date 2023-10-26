import { FieldValues, useForm } from "react-hook-form";
import { HandlePage } from "./UserSettingsModal";
import { CheckboxTags } from "..";
import { dummyTags } from "../../types";

export const CreateChannel = (props: {
  className?: string;
  handlePage: HandlePage;
}) => {
  const { className, handlePage } = props;
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    handlePage("top");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`form-group ${className}`}
      >
        <div className="fs-4 fw-bold mb-3">グループチャンネルを作成</div>
        <label htmlFor="create-channel-name" className="fs-5 fw-medium mb-3">
          チャンネル名
        </label>
        <input
          type="text"
          className="form-control w-50 mb-3"
          id="create-channel-name"
          {...register("name", { required: true })}
        />
        <label
          htmlFor="create-channel-description"
          className="fs-5 fw-medium mb-3"
        >
          説明欄
        </label>
        <input
          type="text"
          className="form-control w-50 mb-3"
          id="create-channel-description"
          {...register("description", { required: true })}
        />
        <CheckboxTags register={register} tags={dummyTags} className="w-50" />
        <div className="user-settings-update-footer mt-5">
          <button
            type="submit"
            className="btn btn-primary fw-bold lh-1 px-4 py-3"
          >
            作成
          </button>
          <button
            type="button"
            className="btn btn-outline-dark fw-bold lh-1 px-4 py-3 ms-5"
            onClick={() => handlePage("top")}
          >
            キャンセル
          </button>
        </div>
      </form>
    </>
  );
};
