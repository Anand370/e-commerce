import img1 from "../slider/img1.webp";
import img2 from "../slider/img2.png";
import img3 from "../slider/img3.png";

import cardImg1 from "../cardimg/laptop1.jpg";
import cardImg2 from "../cardimg/laptop2.jpeg";
import cardImg3 from "../cardimg/laptop3.jpeg";
import mobileImg1 from "../cardimg/phoneImg1.png";
import elecGadge from "../cardimg/electronicGadge.jpeg";

const sliderData = [
    {
        id: 1,
        img: img1,
        text1: "Never Before Deals On E-commerce site",
        text2: "getDiscount Upto 25%",
        text3: "get discount upto 20%"
    },
    {
        id: 2,
        img: img2,
        text1: "Big offer",
        text2: "getDiscount Upto 25%",
        text3: "get discount upto 20%"
    },
    {
        id: 3,
        img: img3,
        text1: "Offer Offer Offer",
        text2: "getDiscount Upto 25%",
        text3: "get discount upto 20%"
    }
]

const cardData = [
    {
        category: "Laptop",
        img: cardImg1,
        price: 5000
    },
    {
        category: "Mobile",
        img: mobileImg1,
        price: 4000
    },
    {
        category: "Mobile",
        img: elecGadge,
        price: 4000
    },
    {
        category: "Laptop",
        img: cardImg1,
        price: 5000
    },
    {
        category: "Mobile",
        img: mobileImg1,
        price: 4000
    },
    {
        category: "Mobile",
        img: elecGadge,
        price: 4000
    },
    {
        category: "Laptop",
        img: cardImg1,
        price: 5000
    },
    {
        category: "Mobile",
        img: mobileImg1,
        price: 4000
    },
    {
        category: "Mobile",
        img: elecGadge,
        price: 4000
    }
]

export const staticData = {
    sliderData,
    cardData
}

 