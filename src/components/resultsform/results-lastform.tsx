import { LastFormData } from "../../utils/interface";

export default function LastFormResult({animal}: LastFormData) {
    return(
        <div>
            <h2>Résultat du troisième formulaire : </h2>
            <h3>Le meilleur animal de compagnie ?</h3>
            <p>{animal}</p>
        </div>
    )
}