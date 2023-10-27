import { UseFormRegister } from "react-hook-form";
import { FieldValues } from "react-hook-form";

export const InputMailAddress = (props: {
  register: UseFormRegister<FieldValues>;
  className?: string;
}) => {
  const { register, className } = props;
  return (
    <>
      <div className={className}>
        <label htmlFor="email" className="form-label fw-medium mb-2">
          メールアドレス
        </label>
        <input
          type="email"
          id="email"
          className="form-control form-control-lg fw-normal"
          {...register("email", {
            required: true,
            pattern:
              /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
          })}
          placeholder="example.com"
        />
      </div>
    </>
  );
};
