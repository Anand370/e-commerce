import React, { useEffect, useReducer, useRef, useState } from "react";
import css from "./cardUtils.module.css";
import img1 from "../../../assets/cardimg/laptop1.jpg";
import img2 from "../../../assets/cardimg/laptop2.jpeg";
import img3 from "../../../assets/cardimg/laptop3.jpeg";
const Card = (props) => {

   const {
   category = '',
   img = "",
   price = 0
   }  = props.data;
    const [currState, setCurrState] = useState(0);

    const handleNext = () => {
        if (currState < 3) {
            setCurrState(currState + 1);
        }
        if (currState === 3) {
            setCurrState(0);
        }
    }
    const handlePrev = () => {
        if (currState === 0) {
            setCurrState(3)
        }
        if (currState > 0) {
            setCurrState(currState - 1);
        }
    }

    useEffect(() => {
        handleNext();
    }, [])
    return (
        <>
            <div className={css.outDiv}>
                <div className={css.innerDiv}>
                    {/* {
                    img1 ? <img src={img1} alt="card image" className={css.cardImg} /> : <div className={css.cardImg} ></div>
                } */}
                    <div >
                        {/* <h3>Card Heading</h3> */}
                        <img src={img} alt="card-img" className={css.cardImg} />
                        <p>{price}</p>
                        <p>{category}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;