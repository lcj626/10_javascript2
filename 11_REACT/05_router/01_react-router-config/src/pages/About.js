import { useState } from "react";


export const About = ()=>{
  const [about, setAbout] = useState(0);

  const onChange = () => setAbout(about+1);
    return(
        <div>
            <h1>소개</h1>
            <button onClick={onChange}>+1</button>
        </div>
    )
}