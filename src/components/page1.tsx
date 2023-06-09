import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import style from "./page.module.css";

import { add, nextPage } from "../slice/form-slice";
// import { Page } from "../container/all-from";
import { useAppDispatch, useAppSelector } from "../slice/hooks";
import { FirstFormData } from "../utils/interface";
import Button from "./buttton/button";



export default function FirstForm() {
  const nav = useNavigate();
  const dispatch = useAppDispatch();
  let currentPage = useAppSelector((state) => state.form.actualPage);
  const { register, handleSubmit,formState: { errors } } = useForm<FirstFormData>();
  const [formValid, setFormValid] = useState<boolean>(false);
  const [redirection, setRedirection] = useState<string>("");
  const handleInfo: SubmitHandler<FirstFormData> = ({ name, surname }: FirstFormData) => {
    setFormValid(true);
    const firstForm: FirstFormData = {
      name: name,
      surname: surname,
    };
    dispatch(add({firstForm: firstForm}));
  };

  const handleNextPage = () => {
    setRedirection("Vous allez être redirigez vers la page 2");
    dispatch(nextPage(1));
    setTimeout(() => {
      nav(`/form/${currentPage + 1}`);
      setRedirection('')
    }, 2000);
  };
  return (
    <div className={style["page-1"]}>
      <h2>Page 1</h2>
      <form className={style["form"]} onSubmit={handleSubmit(handleInfo)}>
        <label htmlFor="name">Votre nom : </label>
        <input type="text" {...register("name", { required: true })} />
        {errors.name && <p>Champ obligatoire !</p>}
        <label htmlFor="surname">Votre prénom : </label>
        <input type="text" {...register("surname", { required: true })} />
        {errors.surname && <p>Champ obligatoire !</p>}

        <button type="submit">Valider</button>
      </form>
      {formValid && <p>{redirection}</p>}
      <Button
        className={formValid === true ? style["valid"] : " "}
        onClick={handleNextPage}
        text={"Page Suivante"}
        disable={!formValid}
      />
    </div>
  );
}
