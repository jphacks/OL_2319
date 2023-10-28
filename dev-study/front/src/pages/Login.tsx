import { useForm } from "react-hook-form";
import { InputMailAddress, InputPassword } from "../components";
import { SubmitHandler, FieldValues } from "react-hook-form";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { AlertToast } from "../components";
import { useEffect, useState } from "react";
import "../styles/Form.scss";
import { api } from "../utils";

export const Login = () => {
  const [alertType, setAlertType] = useState<"success" | "error" | undefined>(
    undefined,
  );
  const [alertStr, setAlertStr] = useState<string>("");
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    api
      .post("/users/login", data)
      .then((res) => {
        localStorage.setItem("user_id", res.data.id);
        navigate("/select?prev=login");
      })
      .catch(() => {
        setAlertType("error");
        setAlertStr("ログインに失敗しました。");
      });
  };
  // TODO: ログイン機能実装
  // TODO: ユーザーフォームのバリデーションエラー表示
  const [searchParams, setSearchParams] = useSearchParams();
  let isLoaded = false;
  useEffect(() => {
    if (isLoaded) return;
    if (searchParams.get("prev") === "signup") {
      setAlertStr("ユーザー登録が完了しました。");
      setAlertType("success");
      setSearchParams({});
    }
    isLoaded = true;
  }, []);

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
      <AlertToast
        alertType={alertType}
        alertStr={alertStr}
        setAlertType={setAlertType}
      />
    </>
  );
};
