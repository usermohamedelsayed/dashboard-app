// Import Images
import imgTopBox1 from "./imgTopBox-1.jpg";
import imgTopBox2 from "./imgTopBox-2.jpg";
import imgTopBox3 from "./imgTopBox-3.jpg";
import imgTopBox4 from "./imgTopBox-4.jpg";
import imgTopBox5 from "./imgTopBox-5.jpg";
import imgTopBox6 from "./imgTopBox-6.jpg";
import imgTopBox7 from "./imgTopBox-7.jpg";
// Import Icons
import { FaUsers } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { RiPercentFill } from "react-icons/ri";
const dataBox1 = [
  {
    id: 1,
    img: imgTopBox1,
    name: "ali ahmed",
    email: "ali@gmail.com",
    price: 32.12,
  },
  {
    id: 2,
    img: imgTopBox2,
    name: "sara ali",
    email: "sara@gmail.com",
    price: 42.12,
  },
  {
    id: 3,
    img: imgTopBox3,
    name: "kahled sayed",
    email: "kahled@gmail.com",
    price: 21.53,
  },
  {
    id: 4,
    img: imgTopBox4,
    name: "ahmed alaa",
    email: "ahmed@gmail.com",
    price: 32.12,
  },
  {
    id: 5,
    img: imgTopBox5,
    name: "othman ali",
    email: "othman@gmail.com",
    price: 72.42,
  },
  {
    id: 6,
    img: imgTopBox6,
    name: "hager ali",
    email: "hager@gmail.com",
    price: 22.22,
  },
  {
    id: 7,
    img: imgTopBox7,
    name: "osama sayed",
    email: "osama@gmail.com",
    price: 42.26,
  },
];
const dataBox2 = {
  color: "#009688",
  icon: <FaUsers />,
  title: "total users",
  number: 21.324,
  percentage: 76,
  dataKey: "users",
  data: [
    {
      users: 2000,
    },
    {
      users: 3000,
    },
    {
      users: 2000,
    },
    {
      users: 2780,
    },
    {
      users: 890,
    },
    {
      users: 2390,
    },
    {
      users: 3490,
    },
  ],
};
const dataBox3 = {
  color: "#FFC107",
  icon: <FcSalesPerformance />,
  title: "total revenue",
  number: 66.253,
  percentage: 14,
  dataKey: "revenue",
  data: [
    {
      revenue: 2400,
    },
    {
      revenue: 1398,
    },
    {
      revenue: 9800,
    },
    {
      revenue: 3908,
    },
    {
      revenue: 4800,
    },
    {
      revenue: 3800,
    },
    {
      revenue: 4300,
    },
  ],
};
const dataBox5 = {
  color: "#9C27B0",
  icon: <MdOutlineProductionQuantityLimits />,
  title: "total products",
  number: 323,
  percentage: 33,
  dataKey: "products",
  data: [
    {
      products: 400,
    },
    {
      products: 2210,
    },
    {
      products: 5290,
    },
    {
      products: 2000,
    },
    {
      products: 2181,
    },
    {
      products: 6500,
    },
    {
      products: 2100,
    },
  ],
};
const dataBox6 = {
  color: "#03A9F4",
  icon: <RiPercentFill />,
  title: "total ratio",
  number: 3.5,
  percentage: 10,
  dataKey: "ratio",
  data: [
    {
      ratio: 3290,
    },
    {
      ratio: 2210,
    },
    {
      ratio: 4000,
    },
    {
      ratio: 2000,
    },
    {
      ratio: 2100,
    },
    {
      ratio: 6500,
    },
    {
      ratio: 2181,
    },
  ],
};
const dataPie = [
  { name: "mobile", value: 400, color: "#0088FE" },
  { name: "labtob", value: 300, color: "#00C49F" },
  { name: "desktop", value: 300, color: "#FFBB28" },
  { name: "tablet", value: 200, color: "#FF8042" },
];
const dataArea = {
  dataKey: ["book", "electronic", "colthes"],
  data: [
    {
      name: "sun",
      book: 4000,
      electronic: 2400,
      colthes: 2400,
    },
    {
      name: "mon",
      book: 3000,
      electronic: 1398,
      colthes: 2210,
    },
    {
      name: "tue",
      book: 2000,
      electronic: 9800,
      colthes: 2290,
    },
    {
      name: "wed",
      book: 2780,
      electronic: 3908,
      colthes: 2000,
    },
    {
      name: "thu",
      book: 1890,
      electronic: 4800,
      colthes: 2181,
    },
    {
      name: "fri",
      book: 2390,
      electronic: 3800,
      colthes: 2500,
    },
    {
      name: "sat",
      book: 3490,
      electronic: 4300,
      colthes: 2100,
    },
  ],
};
const dataBarLeft = {
  dataKey: "visit",
  color: "#2196F3",
  list: [
    {
      name: "Page A",
      visit: 4000,
    },
    {
      name: "Page B",
      visit: 3000,
    },
    {
      name: "Page C",
      visit: 2000,
    },
    {
      name: "Page D",
      visit: 2780,
    },
    {
      name: "Page E",
      visit: 1890,
    },
    {
      name: "Page F",
      visit: 2390,
    },
    {
      name: "Page G",
      visit: 3490,
    },
  ],
};
const dataBarRight = {
  dataKey: "profit",
  color: "#E91E63",
  list: [
    {
      name: "Page A",
      profit: 4000,
    },
    {
      name: "Page B",
      profit: 3000,
    },
    {
      name: "Page C",
      profit: 2000,
    },
    {
      name: "Page D",
      profit: 2780,
    },
    {
      name: "Page E",
      profit: 1890,
    },
    {
      name: "Page F",
      profit: 2390,
    },
    {
      name: "Page G",
      profit: 3490,
    },
  ],
};
export {
  dataBox1,
  dataBox2,
  dataBox3,
  dataBox5,
  dataBox6,
  dataPie,
  dataArea,
  dataBarLeft,
  dataBarRight,
};
