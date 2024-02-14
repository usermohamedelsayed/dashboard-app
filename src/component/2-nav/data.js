// Import Icons
import { IoHome } from "react-icons/io5";
import { BsMicrosoftTeams, BsPieChartFill } from "react-icons/bs";
import {
  FaCalendarAlt,
  FaChartBar,
  FaClipboardList,
  FaQuestionCircle,
} from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { AiOutlineAreaChart } from "react-icons/ai";
import { MdOutlineMultilineChart } from "react-icons/md";
export const dataNav = [
  {
    id: 1,
    path: "/",
    text: "dashBoard",
    icon: <IoHome />,
  },
  {
    id: 2,
    path: "/team",
    text: "manage team",
    icon: <BsMicrosoftTeams />,
  },
  {
    id: 3,
    path: "/invoices",
    text: "invoices balances",
    icon: <FaClipboardList />,
  },
  {
    id: 4,
    path: "/addUser",
    text: "profile from",
    icon: <IoIosCreate />,
  },
  {
    id: 5,
    path: "/calendar",
    text: "calendar",
    icon: <FaCalendarAlt />,
  },
  {
    id: 6,
    path: "/FAQ",
    text: "FAQ Page",
    icon: <FaQuestionCircle />,
  },
  {
    id: 7,
    path: "/barChart",
    text: "Bar Chart",
    icon: <FaChartBar />,
  },
  {
    id: 8,
    path: "/areaChart",
    text: "area chart",
    icon: <AiOutlineAreaChart />,
  },
  {
    id: 9,
    path: "/lineChart",
    text: "line chart",
    icon: <MdOutlineMultilineChart />,
  },
  {
    id: 10,
    path: "/pieChart",
    text: "pie chart",
    icon: <BsPieChartFill />,
  },
];
