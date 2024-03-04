import React, { useReducer, useState } from "react";
import Layout1 from "../Layout/layout1/layout1";
import Slider from "../Layout/slider/slider";
import css from "./home.module.css";
import CardPage from "../../page/CardPage/CardPage";


const Home = () => {
    let initiaiValue = {
        count: 0
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return { count: state.count + 1 }
            case "decrement":
                return { count: state.count - 1 }
        }
    }

    const [no, setNo] = useState(0);


    const [state, dispatch] = useReducer(reducer, initiaiValue);

    return (
        <>
            <Layout1 >
                <Slider />
                <CardPage />
            </Layout1>
        </>
    )
}

export default Home;