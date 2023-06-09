import { PropsButton } from "../../utils/interface";

export default function Button({text, onClick, disable, className}: PropsButton){

    return (
        <button className={className} disabled={disable} onClick={onClick}>{text}</button>
    )
}