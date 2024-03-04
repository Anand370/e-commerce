import React from "react";
import css from "./CardPage.module.css";
import Card from "../../utils/productUtils/cardUtils/cardUtils";
import { staticData } from "../../assets/data/data";
const CardPage = ()=>{

  let arr = [];
    return(
        <>
          <div className={css.outDiv}>
              {
                staticData.cardData.length > 0 ? 
                staticData.cardData.map((item,index)=>{
                    return (
                        <div key={index} >
                           <Card  data={item} />
                        </div>
                    )
                })
                :
                ""
              }
          </div>
        </>
    )
}


export default CardPage;