import { useEffect, useState } from "react";
import people from "./data";

function App() {
  const [index, setIndex] = useState(0) 
  const lastIndex = people.length - 1
    const nextSlide = () =>{
      if(index === lastIndex){
        return setIndex(0)
      }
      setIndex(index + 1)
    }

    const prevSlide = () =>{
      if(index === 0){
        return setIndex(lastIndex)
      }
      setIndex(index - 1)
    }
  useEffect(() =>{
    let autoSlider = setInterval(() => {
      nextSlide()
    }, 3000);
    return () => clearInterval(autoSlider)
  },[index])
  return ( 
    <div className="container">
      <div className="slider">
        <button onClick={nextSlide} className="next"><i className="fa-solid fa-chevron-right"></i></button>
        <button onClick={prevSlide} className="last"><i className="fa-solid fa-chevron-left"></i></button>
        {
        people.map(({id, title, name, image, quote}, sliderindex) =>{
          let position = 'next'
          if(sliderindex === index){
            position = 'active'
          }
          if(sliderindex === index - 1 ||(index === 0 && sliderindex === lastIndex)){
            position = 'last'
          }
          return <article className={position} key={id}>
          <img src={image} alt={title} />
          <h3>{name}</h3>
          <h5>{title}</h5>
          <p>{quote}</p>
          <i className="fa-solid fa-quote-right"></i>
        </article>
      })
    }
      </div>
    </div>
  );
}

export default App;
