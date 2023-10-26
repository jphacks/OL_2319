import { useForm, UseFormHandleSubmit, FieldValues } from "react-hook-form";
import { HandlePage } from "./UserSettingsModal";
import { ReactNode } from "react";

export const UserSettingsUpdate = (props: {
  children: ReactNode;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  handlePage: HandlePage;
}) => {
  const { children, handleSubmit, handlePage } = props;

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    handlePage("top");
  };

  return (
    <>
      <div className="user-settings-update">
        <form onSubmit={handleSubmit(onSubmit)}>
          {children}
          <div className="user-settings-update-footer mt-5">
            <button
              type="submit"
              className="btn btn-primary fw-bold lh-1 px-4 py-3"
            >
              変更
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
      </div>
    </>
  );
};

export const UserSettingsUpdateName = (props: { handlePage: HandlePage }) => {
  const { handlePage } = props;
  const { register, handleSubmit } = useForm();

  return (
    <>
      <UserSettingsUpdate handleSubmit={handleSubmit} handlePage={handlePage}>
        <div className="user-settings-update-name">
          <div className="form-group">
            <label htmlFor="update-name" className="fs-4 fw-bold">
              ニックネーム変更
            </label>
            <input
              id="update-name"
              type="text"
              className="form-control w-50 mt-3"
              {...register("name", { required: true })}
            />
          </div>
        </div>
      </UserSettingsUpdate>
    </>
  );
};

export const UserSettingsUpdateEmail = (props: { handlePage: HandlePage }) => {
  const { handlePage } = props;
  const { register, handleSubmit } = useForm();

  return (
    <>
      <UserSettingsUpdate handleSubmit={handleSubmit} handlePage={handlePage}>
        <div className="user-settings-update-email">
          <div className="form-group">
            <label htmlFor="update-email" className="fs-4 fw-bold">
              メールアドレス変更
            </label>
            <input
              id="update-email"
              type="text"
              className="form-control w-50 mt-3"
              {...register("email", { required: true })}
            />
          </div>
        </div>
      </UserSettingsUpdate>
    </>
  );
};

export const UserSettingsUpdatePassword = (props: {
  handlePage: HandlePage;
}) => {
  const { handlePage } = props;
  const { register, handleSubmit, watch } = useForm();

  return (
    <>
      <UserSettingsUpdate handleSubmit={handleSubmit} handlePage={handlePage}>
        <div className="user-settings-update-password">
          <div className="form-group">
            <label htmlFor="update-password" className="fs-4 fw-bold">
              パスワード変更
            </label>
            <input
              id="update-password"
              type="password"
              className="form-control w-50 mt-3"
              {...register("password", { required: true, minLength: 8 })}
            />
            <input
              type="password"
              className="form-control w-50 mt-3"
              placeholder="もう一度入力してください"
              {...register("password", {
                required: true,
                validate: (value) => value === watch("password"),
              })}
            />
          </div>
        </div>
      </UserSettingsUpdate>
    </>
  );
};

export const UserSettingsUpdateTags = (props: { handlePage: HandlePage }) => {
  const { handlePage } = props;
  const { register, handleSubmit } = useForm();

  return (
    <>
      <UserSettingsUpdate handleSubmit={handleSubmit} handlePage={handlePage}>
        <div className="user-settings-update-tags">
          <div className="form-group">
            <label htmlFor="update-tags" className="fs-4 fw-bold">
              タグ変更
            </label>
            <input
              id="update-tags"
              type="text"
              className="form-control w-50 mt-3"
              {...register("tags", { required: true })}
            />
          </div>
        </div>
      </UserSettingsUpdate>
    </>
  );
};
