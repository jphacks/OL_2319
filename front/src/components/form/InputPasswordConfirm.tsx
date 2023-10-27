import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { FieldValues } from "react-hook-form";

export const InputPasswordConfirm = (props: {
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  className?: string;
}) => {
  const { register, watch, className } = props;
  return (
    <>
      <div className={className}>
        <label htmlFor="password-confirm" className="form-label fw-medium mb-2">
          パスワード(再入力)
        </label>
        <input
          type="password"
          id="password-confirm"
          className="form-control form-control-lg mb-2"
          {...register("password-confirm", {
            required: true,
            validate: (value) => value === watch("password"),
          })}
        />
      </div>
    </>
  );
};
