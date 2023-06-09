import { useNavigate} from "react-router-dom"

export default function Form(){
    const nav = useNavigate()
    return (
        <div>
            <h1>FORM !</h1>
            <p>Si vous êtes prêt à commencer à réponde</p>
            <button onClick={() => nav('/form/1')}>Cliquez ici !</button>
        </div>
    )
}