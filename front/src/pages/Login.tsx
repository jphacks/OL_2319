import { useForm } from "react-hook-form";
import { InputMailAddress, InputPassword } from "../components";
import { SubmitHandler, FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";
import "../styles/Form.scss";

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);
  // TODO: ログイン機能実装
  // TODO: ユーザーフォームのバリデーションエラー表示

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 from-center">
        <Link to="/">
          <img src="/logo.svg" alt="logo image" className="logo w-100" />
        </Link>
        <InputMailAddress register={register} className="mt-8" />
        <InputPassword register={register} className="mt-4" />
        <button
          type="submit"
          className="btn btn-primary text-white fw-semibold w-100 fs-5 mt-8 px-4 py-3 lh-1"
        >
          ログイン
        </button>
      </form>
    </>
  );
};
