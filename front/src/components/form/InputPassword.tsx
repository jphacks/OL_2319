import { UseFormRegister } from "react-hook-form";
import { FieldValues } from "react-hook-form";

export const InputPassword = (props: {
  register: UseFormRegister<FieldValues>;
  className?: string;
}) => {
  const { register, className } = props;
  return (
    <>
      <div className={className}>
        <label htmlFor="password" className="form-label fw-medium mb-2">
          パスワード
        </label>
        <input
          type="password"
          id="password"
          className="form-control form-control-lg mb-2"
          {...register("password", { required: true, minLength: 6 })}
        />
      </div>
    </>
  );
};
