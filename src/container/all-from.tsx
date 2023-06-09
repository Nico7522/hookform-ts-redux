


import { useAppSelector } from "../slice/hooks"


export interface Page {
     actualPage: string
 }

  
export default function AllForm(){
   
    const currentPage: number = useAppSelector((state) => state.form.actualPage)
  
    console.log(currentPage);
    
    return (
        <>
            
            
        </>
    )
}