import { useEffect } from "react";
import { useAtom } from "jotai";
import { currentBenefitsSlideAtom } from "../../state/atoms";
import style from "./style.module.css";
import benefits from "../../assets/benefits.png";

const Slide = ({ image }: any) => {

  return (
    <div className={style.slide}>
      <div className={style.content}>
        <span>EPA Benefits</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad miniminut veniam</p>
        <p>Lorem ipsum dolor sit amet, tempour consectetur adipiscing elit.  Sed do eiusmod tempor incid</p>
      </div>
      <div className={style.image}>
        <img src={image} alt="" />
      </div>
    </div>
  );

}

const Benefits = () => {

  const [ currentSlide, setCurrentSlide] = useAtom (currentBenefitsSlideAtom);

  const SLIDES = [
    { image: benefits },
    { image: benefits },
    { image: benefits },
    { image: benefits },
    { image: benefits },
  ];

  // useEffect (() => {

  //   const t = setInterval (() => {

  //     setCurrentHeroSlide ((prev) => prev == SLIDES.length - 1 ? 0 : prev + 1);

  //   }, 3000);

  //   return () => {
  //     clearInterval (t);
  //   }

  // }, [currentHeroSlide])

  return (
    <div className={style.benefits}>
      <div className={style.slidesRow} style={{ transform: `translateY(-${currentSlide * 100}vh)` }}>
        { SLIDES.map((slide, i) => <Slide key={i} image={slide.image} />) }
      </div>
      <div className={style.backgroundImage}></div>
      <div className={style.sliderControllers}>
        <ul>
          { SLIDES.map((slide, i) => <li key={i} id={`${ i == currentSlide ? style.active : null}`} onClick={() => setCurrentSlide (i)}></li>) }
        </ul>
      </div>
    </div>
  )
}

export default Benefits;