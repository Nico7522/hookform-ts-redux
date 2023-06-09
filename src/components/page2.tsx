import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { add, nextPage } from "../slice/form-slice";
import { useAppDispatch, useAppSelector } from "../slice/hooks";
import { Hobbie, Langue, SecondFormData } from "../utils/interface";
import style from "./page.module.css";
import { hobbies, langue } from "../utils/data-array";
import Button from "./buttton/button";
import { useNavigate } from "react-router-dom";

export default function SecondForm() {
  const dispatch = useAppDispatch();
  const nav = useNavigate();

  const [selected, setSelected] = useState<Array<Hobbie>>([]);
  const [selectedLang, setSelectedLang] = useState<Array<Langue>>([]);
  const [formValid, setFormValid] = useState<boolean>(false);
  const [redirection, setRedirection] = useState<string>("");
  let currentPage = useAppSelector((state) => state.form.actualPage);

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SecondFormData>();

  const handleForm: SubmitHandler<SecondFormData> = (data: SecondFormData) => {
    setFormValid(true);
    const secondForm: SecondFormData = {
      hobbies: data.hobbies,
      langues: data.langues,
      animal: data.animal,
    };
    dispatch(add({ secondForm: secondForm }));
    setTimeout(() => {}, 2000);
  };
  const handleNextPage = () => {
    setRedirection("Vous allez être redirigez vers la page 3");
    dispatch(nextPage(1));
    setTimeout(() => {
      nav(`/form/${currentPage + 1}`);
      setRedirection("");
    }, 2000);
  };
  return (
    <div>
      <h2>Page 2</h2>
      <form onSubmit={handleSubmit(handleForm)}>
        <label htmlFor="hobbies">Vos hobbies : </label>
        <Controller
          rules={{
            required: {
              value: true,
              message: "Veuillez sélectionner minimum un hobbie",
            },
          }}
          control={control}
          name="hobbies"
          render={({ field: { onChange } }) => {
            return (
              <MultiSelect
                options={hobbies}
                value={selected}
                onChange={(select: Array<Hobbie>) => {
                  console.log(select);
                  onChange(select);
                  setSelected(select);
                }}
                labelledBy="Select"
              />
            );
          }}
        />
        <label htmlFor="langues">Language(s) favori(s) : </label>
        <Controller
          rules={{
            required: {
              value: true,
              message: "Veuillez sélectionner minimum une langue",
            },
          }}
          control={control}
          name="langues"
          render={({ field: { onChange } }) => {
            return (
              <MultiSelect
                options={langue}
                value={selectedLang}
                onChange={(select: Array<Langue>) => {
                  onChange(select);
                  setSelectedLang(select);
                }}
                labelledBy="Select"
              />
            );
          }}
        />
        <label htmlFor="animal">Animal favori : </label>
        <Controller
          rules={{
            required: {
              value: true,
              message: "Veuillez entrer votre animal favori",
            },
          }}
          control={control}
          name="animal"
          render={({ field }) => {
            return <input {...field} type="text" />;
          }}
        />
        <button type="submit">Valid</button>
      </form>
      <div className={style["multiple-errors"]}>
        {errors.hobbies && <p>{errors.hobbies.message}</p>}
        {errors.langues && <p>{errors.langues.message}</p>}
        {errors.animal && <p>{errors.animal.message}</p>}
      </div>

      <Button
        className={formValid === true ? style["valid"] : " "}
        onClick={handleNextPage}
        text={"Page Suivante"}
        disable={!formValid}
      />
      {formValid && <p>{redirection}</p>}
    </div>
  );
}
