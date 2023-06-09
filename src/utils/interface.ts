export interface FirstFormData {
  name: string;
  surname: string;
}

export interface SecondFormData {
    hobbies: Array<Hobbie> | Hobbie[] // <-- meilleur façon de déclarer un tableau
    langues: Array<Langue>
    animal: string 
}

export interface LastFormData {
    animal: string
}

export interface Hobbie {
    label: string
    value: string
}

export interface Langue {
    label: string
    value: string
}

export interface PropsButton {
    text: string
    onClick: (event: React.MouseEvent<HTMLElement>) => void
    disable: boolean
    className: string
}