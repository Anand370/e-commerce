import React , {useEffect, useState} from "react";
import css from "./slider.module.css";
import img1 from "../../../assets/slider/img1.webp";
import { staticData } from "../../../assets/data/data";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
const Slider = (props) => {

    const { img = "", heading = "", message = "" } = props;
    const [curValue,setCurValue] = useState(0);

    const handleNext = ()=>{
        if( curValue < staticData.sliderData.length - 1){
            setCurValue(curValue + 1);
        }
        if(curValue === staticData.sliderData.length - 1){
            setCurValue(0);
        }
    }
    const handlePrev = ()=>{
        if(curValue !== 0){
            setCurValue(curValue - 1)
        }else{
            setCurValue(staticData.sliderData.length - 1)
        }
    }
    useEffect(()=>{
       setTimeout(()=>{
        handleNext();
       },3000);
    },[curValue])
    return (
        <>
            <div className={css.outDiv}>

                <div className={css.outDiv1} ></div>
                <div className={css.outDiv2}>
                    <div className={css.Btn} ><button onClick={handlePrev} > < FaAngleLeft size={40} /></button></div>
                    <div className={css.BtnNextDiv}>
                        <img src={staticData.sliderData[curValue].img} alt="img1" className={css.img} />
                        <div className={css.mess}>
                            <h3 >{staticData.sliderData[curValue].text1}</h3>
                            <p>{staticData.sliderData[curValue].text2}</p>
                        </div>
                    </div>
                    <div className={css.Btn1}><button onClick={handleNext} > < FaAngleRight size={40} /> </button></div>
                </div>
                <div className={css.outDiv1}></div>
            </div>
        </>
    )
}

export default Slider;