import FirstFormResult from "../components/resultsform/results-firstform";
import LastFormResult from "../components/resultsform/results-lastform";
import SecondFormResults from "../components/resultsform/results-secondform";
import { useAppSelector } from "../slice/hooks";

export default function Results() {
    const dataForm = useAppSelector((state) => state.form.dataForm)

    
  return (
    <>
      <FirstFormResult  {...dataForm[0].firstForm} />
      <SecondFormResults {...dataForm[1].secondForm} />
      <LastFormResult {...dataForm[2].lastForm} />
    </>
  );
}
