import { FirstFormData } from "../../utils/interface";

export default function FirstFormResult({name, surname}: FirstFormData ){
    console.log('nom', name);
    
    return (
        <div>
            <h2>Résultat du premier formulaire : </h2>
            <p>Votre nom : {name}</p>
            <p>Votre prénom : {surname}</p>
        </div>
    )
}