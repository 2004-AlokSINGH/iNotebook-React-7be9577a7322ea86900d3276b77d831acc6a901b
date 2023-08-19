
import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState=(props)=>{

    const notesInitial=[
        {
          "_id": "64dd0d394584cf7a018ce3d1",
          "user": "64db2129bdc1ddaf9a3182e8",
          "title": "Alok new Note",
          "description": "Systummmm",
          "tag": "Systumm!",
          "date": "2023-08-16T17:54:01.623Z",
          "__v": 0
        },
        {
          "_id": "64dd0dc14584cf7a018ce3d4",
          "user": "64db2129bdc1ddaf9a3182e8",
          "title": "NarendraModi",
          "description": "Fukra Insaan",
          "tag": "Systumm!",
          "date": "2023-08-16T17:56:17.796Z",
          "__v": 0
        },
        {
            "_id": "64dd0dc14584cf7a018ce3d4",
            "user": "64db2129bdc1ddaf9a3182e8",
            "title": "NarendraModi",
            "description": "Fukra Insaan",
            "tag": "Systumm!",
            "date": "2023-08-16T17:56:17.796Z",
            "__v": 0
          },
          {
            "_id": "64dd0dc14584cf7a018ce3d4",
            "user": "64db2129bdc1ddaf9a3182e8",
            "title": "NarendraModi",
            "description": "Fukra Insaan",
            "tag": "Systumm!",
            "date": "2023-08-16T17:56:17.796Z",
            "__v": 0
          },
          {
            "_id": "64dd0dc14584cf7a018ce3d4",
            "user": "64db2129bdc1ddaf9a3182e8",
            "title": "NarendraModi",
            "description": "Fukra Insaan",
            "tag": "Systumm!",
            "date": "2023-08-16T17:56:17.796Z",
            "__v": 0
          }
      ]

      const [notes, setNotes] = useState(notesInitial)

    

   


    return(
        <NoteContext.Provider  value={{notes,setNotes}}>
            
            {props.children}


        </NoteContext.Provider>
    )

}


export default NoteState