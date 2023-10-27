import { UseFormRegister } from "react-hook-form";
import { FieldValues } from "react-hook-form";

export const InputUserName = (props: {
  register: UseFormRegister<FieldValues>;
  className?: string;
}) => {
  const { register, className } = props;
  return (
    <>
      <div className={className}>
        <label htmlFor="user-name" className="form-label fw-medium mb-2">
          ニックネーム
        </label>
        <input
          type="text"
          id="user-name"
          className="form-control form-control-lg"
          {...register("userName", { required: true })}
        />
      </div>
    </>
  );
};
