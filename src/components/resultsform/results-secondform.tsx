import { SecondFormData } from "../../utils/interface";

export default function SecondFormResults({hobbies, langues, animal}: SecondFormData){
    if (!hobbies || !langues || !animal) {
        return <p>Veuillez patienter</p>
    }
    return (
        <div>
            <h2>Résultat du second formulaire : </h2>
            <h3>Vos hobbies : </h3>
            {hobbies.map((h) => {
                return <p>{h.value}</p>
            })}
            <h3>Vos langues</h3>
            {langues.map((l) => {
                return <p>{l.value}</p>
            })}
            <h3>Votre animal préféré</h3>
            <p>{animal}</p>
        </div>
    )
}