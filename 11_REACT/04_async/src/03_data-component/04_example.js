import { useState } from "react"


const SearchDigimon = () =>{
  const [digimon, setDigimon] = useState({});
  const [digimonName, setDigimonName] = useState("");
  const [digimonImg, setDigimonImg] = useState([]);

  const onChangeHandler = (e) =>{
      setDigimon(e.target.value);
  }

  const onClickHandler = () =>{
      fetch(`https://digi-api.com/api/v1/digimon/${digimon}`)
      .then(r => r.json())
      .then(result => {
        console.log(result);
        setDigimonName(result.name);
        setDigimonImg(result.images[0].href);
      })
  }




  return(
      <>
          <input type="text" onChange={onChangeHandler}/>
          <button onClick={onClickHandler}>검색</button>

          <h4>{`${digimonName}`}</h4>
          <img src={digimonImg}/>
      </>
  )
}


export default SearchDigimon;