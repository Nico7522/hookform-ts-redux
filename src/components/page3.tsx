import style from "./page.module.css";
import { Checkbox } from "@material-ui/core";
import { useNavigate } from 'react-router-dom'
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {FormControl, FormLabel, FormGroup} from "@material-ui/core";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import Button from "./buttton/button";
import { useAppDispatch } from "../slice/hooks";
import { add } from "../slice/form-slice";
import { LastFormData } from "../utils/interface";
import { animal } from "../utils/data-array";


export default function LastForm() {
  const [selectedCheckbox, setSelectedCheckbox] = useState<number | null>(null);
  const nav = useNavigate()
  const dispatch = useAppDispatch();
  const [formValid, setFormValid] = useState<boolean>(false);
  const [redirection, setRedirection] = useState<string>("");
  const { control, handleSubmit, formState: { errors } } = useForm<LastFormData>();

  const handlePet: SubmitHandler<LastFormData> = ({animal}: LastFormData) => {
    setFormValid(true);
    console.log(animal);
    
    const lastForm: LastFormData = {
        animal: animal
    }
    dispatch(add({lastForm: lastForm}))
  };

  const handleNextPage = () => {
    setRedirection("Vous allez être redirigé vers vos résultats");
    setTimeout(() => {
      nav(`/form/resultats`);
      setRedirection("");
    }, 4000);
  };

  return (
    <div>
    <form className={style["form"]} onSubmit={handleSubmit(handlePet)}>
      <FormControl component="fieldset" error={!!errors?.animal}>
        <FormLabel component="legend">
          Quel est le meilleur animal de compagnie ??
        </FormLabel>
        <FormGroup className={style["form"]}>
          <Controller
            name="animal"
            control={control}
            render={({ field }) =>
              animal.map((item) => (
                <FormControlLabel
                  {...field}
                  key={item.id}
                  label={item.name}
                  control={
                    <Checkbox
                      checked={selectedCheckbox === item.id}
                      onChange={() => {
                        setSelectedCheckbox(item.id);
                        if (!field.name.includes(item.name)) {
                          field.onChange(item.name);
                          return;
                        }
                        
                      }}
                    />
                  }
                />
              ))
            }
          />
        </FormGroup>
      </FormControl>
      <button type="submit">Valider</button>
    </form>
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



