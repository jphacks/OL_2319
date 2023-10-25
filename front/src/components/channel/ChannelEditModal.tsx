import { ModalBase } from "../_ModalBase";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { SubmitHandler, FieldValues } from "react-hook-form";

export const ChannelEditModal = (props: { className?: string }) => {
  const { className } = props;
  const { register, handleSubmit } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  const ModalContent = () => (
    <>
      <div className={className}>
        <div className="channel-title fs-4 fw-bold mb-3 lh-base">チャンネル設定</div>
        <form onSubmit={handleSubmit(onSubmit)} className="ms-0">
          <label htmlFor="channel-name" className="form-label fw-medium mb-3 fs-5 lh-base">
            チャンネル名
          </label>
          <input
            id="channel-name"
            type="text"
            className="form-control form-control-lg fw-medium mb-3"
            {...register("name")}
          />
          <label
            htmlFor="channel-description"
            className="form-label fw-medium mb-3 fs-5 lh-base"
          >
            説明欄
          </label>
          <input
            id="channel-description"
            type="text"
            className="form-control form-control-lg fw-medium mt-3"
            {...register("description")}
          />
          <div className="mt-6 mb-4 w-100">
            <Link to={`/select`}>
              <button
                type="submit"
                className="btn btn-primary fw-bold me-5 px-4 py-3 lh-1 fs-5"
                data-bs-dismiss="modal"
              >
                適用
              </button>
            </Link>
            <button
              type="button"
              className="btn btn-outline-dark fw-bold px-4 py-3 lh-1 fs-5 me-5"
              data-bs-dismiss="modal"
            >
              キャンセル
            </button>
            <button
              type="button"
              className="btn btn-danger fw-bold me-3 px-4 py-3 lh-1 fs-5"
              data-bs-dismiss="modal"
            >
              チャンネルを削除
            </button>
          </div>
        </form>
      </div>
    </>
  );

  return (
    <>
      <ModalBase children={<ModalContent />} id={`modal-channel-edit`} />
    </>
  );
};
