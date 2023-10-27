import { useForm } from "react-hook-form";
import {
  InputMailAddress,
  InputPassword,
  InputPasswordConfirm,
  InputUserName,
  CheckboxTags,
  AlertToast,
} from "../components";
import { SubmitHandler, FieldValues } from "react-hook-form";
import "../styles/Form.scss";
import { Link, useNavigate } from "react-router-dom";
import { dummyTags } from "../types";
import { api } from "../utils";
import { useState } from "react";

export const SignUp = () => {
  const { register, handleSubmit, watch } = useForm();
  const [alertType, setAlertType] = useState<"success" | "error" | undefined>(
    undefined,
  );
  const [alertStr, setAlertStr] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    api
      .post("/users/signup", data)
      .then(() => {
        navigate("/login?prev=signup");
      })
      .catch(() => {
        console.log("error");
        setAlertType("error");
        setAlertStr("ユーザー登録に失敗しました。");
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 from-center">
        <Link to="/">
          <img src="/logo.svg" alt="logo image" className="logo w-100" />
        </Link>
        <InputMailAddress register={register} className="mt-8" />
        <InputPassword register={register} className="mt-4" />
        <div className="form-text">6文字以上</div>
        <InputPasswordConfirm
          register={register}
          watch={watch}
          className="mt-4"
        />
        <InputUserName register={register} className="mt-4" />
        <CheckboxTags register={register} tags={dummyTags} className="mt-4" />
        <button
          type="submit"
          className="btn btn-primary text-white fw-semibold w-100 fs-5 mt-8 px-4 py-3 lh-1"
        >
          新規登録
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
