import {
  AiFillHome,
  AiFillQuestionCircle,
  AiOutlineAreaChart,
} from "react-icons/ai";
// Icons
import { FaUsers } from "react-icons/fa";
import { FiMap } from "react-icons/fi";
import { ImStatsBars } from "react-icons/im";
import { BiSolidUser } from "react-icons/bi";
import { BsFillCalendarDateFill, BsFillPieChartFill } from "react-icons/bs";
import { MdMenuBook } from "react-icons/md";
import { MdMultilineChart } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FcSalesPerformance } from "react-icons/fc";
import { GiInspiration } from "react-icons/gi";
// Img Top Box
import { imgTopBox1 } from "./assaset/index";
import { imgTopBox2 } from "./assaset/index";
import { imgTopBox3 } from "./assaset/index";
import { imgTopBox4 } from "./assaset/index";
import { imgTopBox5 } from "./assaset/index";
import { imgTopBox6 } from "./assaset/index";
import { imgTopBox7 } from "./assaset/index";

const dataDrawer = [
  {
    id: 1,
    path: "/",
    icon: <AiFillHome />,
    text: "dashboard",
  },
  {
    id: 2,
    path: "/team",
    icon: <FaUsers />,
    text: "manage team",
  },
  {
    id: 4,
    path: "/invoices",
    icon: <MdMenuBook />,
    text: "invoices balances",
  },
  {
    id: 5,
    path: "/createUser",
    icon: <BiSolidUser />,
    text: "create user",
  },
  {
    id: 6,
    path: "/calendar",
    icon: <BsFillCalendarDateFill />,
    text: "calendar",
  },
  {
    id: 7,
    path: "/FAQ",
    icon: <AiFillQuestionCircle />,
    text: "FAQ page",
  },
  {
    id: 8,
    path: "/barChart",
    icon: <ImStatsBars />,
    text: "bar chart",
  },
  {
    id: 9,
    path: "/areaChart",
    icon: <AiOutlineAreaChart />,
    text: "area chart",
  },
  {
    id: 10,
    path: "/lineChart",
    icon: <MdMultilineChart />,
    text: "line chart",
  },
  {
    id: 11,
    path: "/pieChart",
    icon: <BsFillPieChartFill />,
    text: "pie chart",
  },
  {
    id: 12,
    path: "/geography",
    icon: <FiMap />,
    text: "geography chart",
  },
];
const dataFQA = [
  {
    id: Math.random(),
    title: "quetion",
    subTitle: "i am an accordion",
    answers: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, placeat? Tempora eaque reprehenderit, quo optio eos necessitatibus aspernatur assumenda vel repellat, ullam nobis quos, illum doloribus nam? Voluptates impedit non nisi expedita magnam, eaque ratione, saepe eos consequatur inventore ullam.
                     repellat, ullam nobis quos, illum doloribus nam? Voluptates impedit non nisi expedita magnam, eaque ratione, saepe eos consequatur inventore ullam.
    `,
  },
  {
    id: Math.random(),
    title: "quetion",
    subTitle: "i am an accordion",
    answers: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, placeat? Tempora eaque reprehenderit, quo optio eos necessitatibus aspernatur assumenda vel repellat, ullam nobis quos, illum doloribus nam? Voluptates impedit non nisi expedita magnam, eaque ratione, saepe eos consequatur inventore ullam.
                    Lorem ipsum dolor sit amet
    `,
  },
  {
    id: Math.random(),
    title: "quetion",
    subTitle: "i am an accordion",
    answers: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, placeat? Tempora eaque reprehenderit, quo optio eos necessitatibus aspernatur assumenda vel repellat, ullam nobis quos, illum doloribus nam? Voluptates impedit non nisi expedita magnam, eaque ratione, saepe eos consequatur inventore ullam.
                     reprehenderit, quo optio eos necessitatibus aspernatur assumenda vel repellat, ullam nobis quos, illum doloribus nam? Voluptates impedit non nisi expedita magnam, eaque ratione, saepe eos consequatur inventore ullam.
    `,
  },
  {
    id: Math.random(),
    title: "quetion",
    subTitle: "i am an accordion",
    answers: `
     assumenda vel repellat, ullam nobis quos, illum doloribus nam? Voluptates impedit non nisi expedita magnam, eaque ratione, saepe eos consequatur inventore ullam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, placeat? Tempora eaque reprehenderit, quo optio eos necessitatibus aspernatur assumenda vel repellat, ullam nobis quos, illum doloribus nam? Voluptates impedit non nisi expedita magnam, eaque ratione, saepe eos consequatur inventore ullam.
    `,
  },
  {
    id: Math.random(),
    title: "quetion",
    subTitle: "i am an accordion",
    answers: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, placeat? Tempora eaque reprehenderit, quo optio eos necessitatibus aspernatur assumenda vel repellat, ullam nobis quos, illum doloribus nam? Voluptates impedit non nisi expedita magnam, eaque ratione, saepe eos consequatur inventore ullam.
                    Lorem ipsum dolor sit amet consectetur adipisici ullam nobis quos, illum doloribus nam? Voluptates impedit non nisi expedita magnam, eaque ratione, saepe eos consequatur inventore ullam.
    `,
  },
  {
    id: Math.random(),
    title: "quetion",
    subTitle: "i am an accordion",
    answers: `
    Lorem ipsum dolor sit necessitatibus aspernatur assumenda vel repellat, ullam nobis quos, illum doloribus nam? Voluptates impedit non nisi expedita magnam, eaque ratione, saepe eos consequatur inventore ullam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, placeat? Tempora eaque reprehenderit, quo optio eos necessitatibus aspernatur assumenda vel repellat, ullam nobis quos, illum doloribus nam? Voluptates impedit non nisi expedita magnam, eaque ratione, saepe eos consequatur inventore ullam.
    `,
  },
  {
    id: Math.random(),
    title: "quetion",
    subTitle: "i am an accordion",
    answers: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, placeat? Tempora eaque reprehenderit, quo optio eos necessitatibus aspernatur assumenda vel repellat, ullam nobis quos, illum doloribus nam? Voluptates impedit non nisi expedita magnam, eaque ratione, saepe eos consequatur inventore ullam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, placeat? Tempora eaque ratione, saepe eos consequatur inventore ullam.
    `,
  },
  {
    id: Math.random(),
    title: "quetion",
    subTitle: "i am an accordion",
    answers: `
    menda vel repellat, ullam nobis quos, illum doloribus nam? Voluptates impedit non nisi expedita magnam, eaque ratione, saepe eos consequatur inventore ullam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, placeat? Tempora eaque reprehenderit, quo optio eos necessitatibus aspernatur assumenda vel repellat, ullam nobis quos, illum doloribus nam? Voluptates impedit non nisi expedita magnam, eaque ratione, saepe eos consequatur inventore ullam.
    `,
  },
  {
    id: Math.random(),
    title: "quetion",
    subTitle: "i am an accordion",
    answers: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, placeat? Tempora eaque reprehenderit, quo optio eos necessitatibus aspernatur assumenda vel repellat, ullam nobis quos, illum doloribus nam? Voluptates impedit non nisi expedita magnam, eaque ratione, saepe eos consequatur inventore ullam.
                   eaque reprehenderit, quo optio eos necessitatibus aspernatur assumenda vel repellat, ullam nobis quos, illum doloribus nam? Voluptates impedit non nisi expedita magnam, eaque ratione, saepe eos consequatur inventore ullam.
    `,
  },
  {
    id: Math.random(),
    title: "quetion",
    subTitle: "i am an accordion",
    answers: `
    Tempora eaque reprehenderit, quo optio eos necessitatibus aspernatur assumenda vel repellat, ullam nobis quos, illum doloribus nam? Voluptates impedit non nisi expedita magnam, eaque ratione, saepe eos consequatur inventore ullam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, placeatos necessitatibus aspernatur assumenda vel repellat, ullam nobis quos, illum doloribus nam? Voluptates impedit non nisi expedita magnam, eaque ratione, saepe eos consequatur inventore ullam.
    `,
  },
  {
    id: Math.random(),
    title: "quetion",
    subTitle: "i am an accordion",
    answers: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, placeat? Tempora eaque reprehenderit, quo optio eos necessitatibus aspernatur assumenda vel repellat, ullam nobis quos, illum doloribus nam? Voluptates impedit non nisi expedita magnam, eaque ratione, saepe eos consequatur inventore ullam.
                    eaque reprehenderit, quo optio eos necessitatibus aspernatur assumenda vel repellat, ullam nobis quos, illum doloribus nam? Voluptates impedit non nisi expedita magnam, eaque ratione, saepe eos consequatur inventore ullam.
    `,
  },
];
const ChartBoxData = [
  {
    name: "2019",
    germany: 4000,
    france: 2400,
    spain: 2400,
  },
  {
    name: "2020",
    germany: 3000,
    france: 1398,
    spain: 2210,
  },
  {
    name: "2021",
    germany: 2000,
    france: 9800,
    spain: 2290,
  },
  {
    name: "2022",
    germany: 2780,
    france: 3908,
    spain: 2000,
  },
  {
    name: "2023",
    germany: 1890,
    france: 4800,
    spain: 2181,
  },
];
const pieChartData = {
  data: [
    { name: "mobile", value: 400, color: "#0088FE" },
    { name: "desktop", value: 300, color: "#00C49F" },
    { name: "labtop", value: 300, color: "#FFBB28" },
    { name: "tablet", value: 200, color: "#FF8042" },
  ],
};
const lineChartData = [
  {
    name: "sun",
    users: 4000,
    products: 2400,
    ratio: 3000,
  },
  {
    name: "mon",
    users: 3000,
    products: 1398,
    ratio: 4210,
  },
  {
    name: "tue",
    users: 2000,
    products: 9800,
    ratio: 5290,
  },
  {
    name: "wed",
    users: 2780,
    products: 3908,
    ratio: 6780,
  },
  {
    name: "tuu",
    users: 1890,
    products: 4800,
    ratio: 7000,
  },
  {
    name: "fri",
    users: 2390,
    products: 3800,
    ratio: 8500,
  },
  {
    name: "sat",
    users: 3490,
    products: 4300,
    ratio: 10000,
  },
];
const areaChartData = [
  {
    name: "sun",
    books: 4000,
    colthes: 2400,
    electronic: 9000,
  },
  {
    name: "mon",
    books: 3000,
    colthes: 2398,
    electronic: 4210,
  },
  {
    name: "tue",
    books: 2000,
    colthes: 9800,
    electronic: 5290,
  },
  {
    name: "wed",
    books: 2780,
    colthes: 3908,
    electronic: 6780,
  },
  {
    name: "tuu",
    books: 1890,
    colthes: 4800,
    electronic: 7000,
  },
  {
    name: "fri",
    books: 1390,
    colthes: 3800,
    electronic: 8500,
  },
  {
    name: "sat",
    books: 3490,
    colthes: 4300,
    electronic: 10000,
  },
];
const dataHomeTopBox = [
  {
    id: 1,
    img: imgTopBox1,
    name: "hager ahmed",
    email: "hager@gmail.com",
    number: 3221,
  },
  {
    id: 2,
    img: imgTopBox2,
    name: "ali ahmed",
    email: "ali@gmail.com",
    number: 5221,
  },
  {
    id: 3,
    img: imgTopBox3,
    name: "khaled sayed",
    email: "khaled@gmail.com",
    number: 2231,
  },
  {
    id: 4,
    img: imgTopBox4,
    name: "juna ali",
    email: "juna@gmail.com",
    number: 6231,
  },
  {
    id: 5,
    img: imgTopBox5,
    name: "osama alaa",
    email: "osama@gmail.com",
    number: 3231,
  },
  {
    id: 6,
    img: imgTopBox6,
    name: "othman sayed",
    email: "othman@gmail.com",
    number: 4231,
  },
  {
    id: 7,
    img: imgTopBox7,
    name: "mohamed ali",
    email: "mohamed@gmail.com",
    number: 9231,
  },
];
const dataHomeBoxsLiens = {
  dataBoxUsers: {
    totalName: "users",
    price: 11.323,
    percentage: 45,
    color: "#F44336",
    icon: <FaUsers />,
    data: [
      {
        users: 4400,
      },
      {
        users: 1198,
      },
      {
        users: 9800,
      },
      {
        users: 3908,
      },
      {
        users: 4800,
      },
      {
        users: 3800,
      },
      {
        users: 9300,
      },
    ],
  },
  dataBoxProducts: {
    totalName: "products",
    price: 33.323,
    percentage: 88,
    color: "#9C27B0",
    icon: <MdOutlineProductionQuantityLimits />,
    data: [
      {
        products: 9400,
      },
      {
        products: 2210,
      },
      {
        products: 6290,
      },
      {
        products: 2000,
      },
      {
        products: 9181,
      },
      {
        products: 2500,
      },
      {
        products: 100,
      },
    ],
  },
  dataBoxRevenue: {
    totalName: "revenue",
    price: 23.323,
    percentage: 10,
    color: "#FF9800",
    icon: <FcSalesPerformance />,
    data: [
      {
        revenue: 8000,
      },
      {
        revenue: 3000,
      },
      {
        revenue: 2000,
      },
      {
        revenue: 2780,
      },
      {
        revenue: 1890,
      },
      {
        revenue: 2390,
      },
      {
        revenue: 3490,
      },
    ],
  },
  dataBoxRatio: {
    totalName: "ratio",
    price: 61.323,
    percentage: 55,
    color: "#2196F3",
    icon: <GiInspiration />,
    data: [
      {
        ratio: 5400,
      },
      {
        ratio: 6210,
      },
      {
        ratio: 7290,
      },
      {
        ratio: 2000,
      },
      {
        ratio: 9181,
      },
      {
        ratio: 2500,
      },
      {
        ratio: 2100,
      },
    ],
  },
};
const dataHomeBarVisit = {
  dataName: ["users", "admin", "manager", "cnt"],
  data: [
    {
      users: 590,
      admin: 800,
      manager: 400,
      cnt: 490,
    },
    {
      users: 868,
      admin: 967,
      manager: 1506,
      cnt: 590,
    },
    {
      users: 1397,
      admin: 1098,
      manager: 989,
      cnt: 350,
    },
    {
      users: 1480,
      admin: 1200,
      manager: 1228,
      cnt: 480,
    },
    {
      users: 1520,
      admin: 1108,
      manager: 1100,
      cnt: 460,
    },
    {
      users: 400,
      admin: 680,
      manager: 700,
      cnt: 380,
    },
  ],
};
const dataHomeBarProfit = {
  dataName: ["profit", "loss", "pay", "drafting"],
  data: [
    {
      profit: 590,
      loss: 800,
      pay: 1100,
      drafting: 290,
    },
    {
      profit: 1868,
      loss: 1167,
      pay: 106,
      drafting: 990,
    },
    {
      profit: 897,
      loss: 1098,
      pay: 1189,
      drafting: 350,
    },
    {
      profit: 1680,
      loss: 1200,
      pay: 628,
      drafting: 480,
    },
    {
      profit: 1520,
      loss: 608,
      pay: 1100,
      drafting: 360,
    },
    {
      profit: 400,
      loss: 1680,
      pay: 1700,
      drafting: 380,
    },
  ],
};
export {
  dataDrawer,
  dataHomeTopBox,
  dataFQA,
  ChartBoxData,
  pieChartData,
  lineChartData,
  areaChartData,
  dataHomeBoxsLiens,
  dataHomeBarVisit,
  dataHomeBarProfit,
};
