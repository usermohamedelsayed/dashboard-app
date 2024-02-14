import React, { useEffect, useRef, useState } from "react";
import "./Calendar.scss";
import Time from "./Time"
// icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
//  Lottiefiles
import { Player } from "@lottiefiles/react-lottie-player";
import eventEmpty from "../../animation/eventEmpty.json"
// Sweet Alert
import swal from "sweetalert";

const daysInMonth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
],
  daysInWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  arrFrom1To12 = [],
  arrFrom1To60 = [];
for (let i = 1; i <= 12; i++) {
  arrFrom1To12.push(i)
}
for (let i = 1; i <= 59; i++) {
  arrFrom1To60.push(i)
}
const Calendar = () => {
  let date = new Date(),
    currMonth = date.getMonth(),
    currYear = date.getFullYear();
  const refListNumbDay = useRef(null)
  const refHeadDate = useRef(null)
  const refCalendar = useRef(null)
  const refShadowHover = useRef(null)
  const refFromHours = useRef(null)
  const refFromMinutes = useRef(null)
  const refFromAMPM = useRef(null)
  const refToHours = useRef(null)
  const refToMinutes = useRef(null)
  const refToAMPM = useRef(null)
  const refTimeEvent = useRef(null)
  const refHeadSpan = useRef(null)
  const refInputAddEvent = useRef(null)
  const refFromTitle = useRef(null)
  const refToTitle = useRef(null)
  const [activePopup, setActivePopup] = useState(false)
  const [activeTimeEvent, setActiveTimeEvent] = useState(false)
  const [arrListEvents, setArrListEvents] = useState([])
  useEffect(() => {
    handlerDateCalendar()
    handlerDateEvents()
    setArrListEvents(JSON.parse(localStorage.eventCalendar || "[]"))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const handlerDateCalendar = () => {
    let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(),
      fristDayOfMonth = new Date(currYear, currMonth, 1).getDay(),
      lastDateOfPrevMonth = new Date(currYear, currMonth, 0).getDate(),
      lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay()
    let lis = ""
    for (let i = fristDayOfMonth; i > 0; i--) {
      lis += `<li class="inActive">${lastDateOfPrevMonth - i + 1}</li>`
    }
    for (let i = 1; i <= lastDateOfMonth; i++) {
      lis += `<li class="${i === date.getDate() && currMonth === date.getMonth() && currYear === date.getFullYear() ? "active" : ""}">${i}</li>`
    }
    for (let i = lastDayOfMonth; i < 6; i++) {
      lis += `<li class="inActive">${i - lastDayOfMonth + 1}</li>`
    }
    refHeadDate.current.innerHTML = `${daysInMonth[currMonth]}, ${currYear}`
    refListNumbDay.current.innerHTML = lis
    handlerDateEvents()
  }
  const handlerPrevDateCalendar = () => {
    refListNumbDay.current.classList.add("motionUp")
    setTimeout(() => refListNumbDay.current.classList.remove("motionUp"), 400)
    if (currMonth === 0) {
      currMonth = daysInMonth.length - 1
      currYear = currYear - 1
    } else {
      currMonth = currMonth - 1
    }
    handlerDateCalendar()
  }
  const handlerNextDateCalendar = () => {
    refListNumbDay.current.classList.add("motionDown")
    setTimeout(() => refListNumbDay.current.classList.remove("motionDown"), 400)
    if (currMonth === daysInMonth.length - 1) {
      currMonth = 0
      currYear = currYear + 1
    } else {
      currMonth = currMonth + 1
    }
    handlerDateCalendar()
  }
  const handlerHoverCalendar = (e) => {
    let rect = refCalendar.current.getBoundingClientRect()
    let left = e.clientX - rect.left
    let top = e.clientY - rect.top
    refShadowHover.current.style.left = left + "px"
    refShadowHover.current.style.top = top + "px"
  }
  const handlerActiveBtnTimeEvent = (e, num, i, cat) => {
    const active = e.target.parentElement.querySelector(".active")
    const valOption = e.target.innerText
    if (active) {
      active.classList.remove('active')
    }
    if (num === i + 1) {
      e.target.classList.add("active")
    }
    switch (cat) {
      case "fromHour":
        return refFromHours.current.innerText = valOption
      case "fromMinute":
        return refFromMinutes.current.innerText = valOption
      case "fromAMPM":
        return refFromAMPM.current.innerText = ": " + valOption
      case "ToHour":
        return refToHours.current.innerText = valOption
      case "ToMinute":
        return refToMinutes.current.innerText = valOption
      case "ToAMPM":
        return refToAMPM.current.innerText = ": " + valOption
      default: return ""
    }
  }
  const handlerDateEvents = () => {
    const lis = [...document.querySelectorAll(".Calendar .listNumbDay li")]
    if (lis) {
      lis.forEach(li => {
        li.addEventListener("click", (e) => {
          let val = e.target.innerText,
            getMonth = daysInMonth[new Date(currYear, currMonth, val).getMonth()],
            getDay = daysInWeek[new Date(currYear, currMonth, val).getDay()],
            getDate = new Date(currYear, currMonth, val).getDate();
          refHeadSpan.current.innerText = `${getDay}, ${getMonth}, ${getDate}`
          refInputAddEvent.current.focus()
          setActivePopup(true)
        })
      })
    }
  }
  const handlerViewDetailsEvent = (e) => {
    if (e.target.value !== "") {
      setActiveTimeEvent(true)
    } else {
      setActiveTimeEvent(false)
    }
  }
  const handlerAddEvent = () => {
    let inpVal = refInputAddEvent.current.value
    if (inpVal !== "") {
      let obj = {
        id: Math.random(),
        desc: inpVal,
        date: refHeadSpan.current.innerText,
        dateNum: +refHeadSpan.current.innerText.match(/\d+/ig),
        timeFrom: refFromTitle.current.innerText,
        timeTo: refToTitle.current.innerText,
      }
      setArrListEvents(prev => [...prev, obj])
      localStorage.setItem("eventCalendar", JSON.stringify([...arrListEvents, obj]))
      setActivePopup(false)
      swal({
        title: "Good job!",
        text: "it has been added successfully!",
        icon: "success",
      });
      refInputAddEvent.current.value = ""
    } else {
      swal({
        text: "you must fill out the field!",
        icon: "info",
        button: "ok",
        background: "red"
      });
    }
  }
  useEffect(() => {
    if (activeTimeEvent) {
      refTimeEvent.current.style.height = refTimeEvent.current.scrollHeight + "px"
    } else {
      refTimeEvent.current.style.height = "0"
    }
  }, [activeTimeEvent])
  const handlerRemoveEvent = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
          setArrListEvents(prev => (prev.filter(item => +item.id !== id)))
          localStorage.setItem("eventCalendar", JSON.stringify(arrListEvents.filter(item => +item.id !== id)))
        } else {
          swal("Your imaginary file is safe!");
        }
      });
  }
  const handlerClearEvents = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
          setArrListEvents([])
          localStorage.setItem("eventCalendar", JSON.stringify([]))
        } else {
          swal("Your imaginary file is safe!");
        }
      });
  }
  return (
    <div className="Calendar">
      <div className={`addEventsPopup ${activePopup ? "active" : ""}`}>
        <div className="overlay" onClick={() => setActivePopup(false)}></div>
        <div className="box">
          <div className="head">
            <span ref={refHeadSpan}>tody</span>
            <input ref={refInputAddEvent} onChange={handlerViewDetailsEvent} type="text" placeholder="Enter new event ..." />
          </div>
          <div ref={refTimeEvent} className="timeEvent">
            <div className="from">
              <span ref={refFromTitle} className="title">
                <span
                  ref={refFromHours}
                  className="hours">00
                </span>:
                <span
                  ref={refFromMinutes}
                  className="minutes">00
                </span>
                <span
                  ref={refFromAMPM}
                  className="AMPM"
                >:
                  PM
                </span>
              </span>
              <div className="select">
                <div className="colHours">
                  {
                    arrFrom1To12.map((num, i) => (
                      <div key={num} className="option" onClick={(e) => handlerActiveBtnTimeEvent(e, num, i, "fromHour")}>{num}</div>
                    ))
                  }
                </div>
                <div className="colMinutes">
                  {
                    arrFrom1To60.map((num, i) => (
                      <div key={num} className="option" onClick={(e) => handlerActiveBtnTimeEvent(e, num, i, "fromMinute")}>{num < 10 ? "0" + num : num}</div>
                    ))
                  }
                </div>
                <div className="colAMPM">
                  <div className="option" onClick={(e) => handlerActiveBtnTimeEvent(e, 1, 0, "fromAMPM")}>am</div>
                  <div className="option" onClick={(e) => handlerActiveBtnTimeEvent(e, 2, 1, "fromAMPM")}>pm</div>
                </div>
              </div>
            </div>
            <span>to</span>
            <div className="to">
              <span ref={refToTitle} className="title">
                <span
                  ref={refToHours}
                  className="hours">00
                </span>:
                <span
                  ref={refToMinutes}
                  className="minutes">00
                </span>
                <span
                  ref={refToAMPM}
                  className="AMPM"
                >:
                  PM
                </span>
              </span>
              <div className="select">
                <div className="colHours">
                  {
                    arrFrom1To12.map((num, i) => (
                      <div key={num} className="option" onClick={(e) => handlerActiveBtnTimeEvent(e, num, i, "ToHour")}>{num}</div>
                    ))
                  }
                </div>
                <div className="colMinutes">
                  {
                    arrFrom1To60.map((num, i) => (
                      <div key={num} className="option" onClick={(e) => handlerActiveBtnTimeEvent(e, num, i, "ToMinute")}>{num < 10 ? "0" + num : num}</div>
                    ))
                  }
                </div>
                <div className="colAMPM">
                  <div className="option" onClick={(e) => handlerActiveBtnTimeEvent(e, 1, 0, "ToAMPM")}>am</div>
                  <div className="option" onClick={(e) => handlerActiveBtnTimeEvent(e, 2, 1, "ToAMPM")}>pm</div>
                </div>
              </div>
            </div>
          </div>
          <button className="btnShadow" onClick={handlerAddEvent}>add event</button>
        </div>
      </div>
      <section className="sectionEvents">
        <p className="title">all event - {arrListEvents.length}</p>
        <ul className="listEvents">
          {
            arrListEvents.length ? (
              arrListEvents.map(item => (
                <li key={item.id} className="itemEvent">
                  <div className="desc">
                    <i className="trash" onClick={() => handlerRemoveEvent(item.id)}><FaTrash /></i>
                    <span>{item.desc}</span>
                  </div>
                  <div className="dateEvent">
                    <div className="date">{item.date}</div>
                    <div className="time">{item.timeFrom} <span>to</span> {item.timeTo}</div>
                  </div>
                </li>
              ))
            ) : <div className="player"><Player loop autoplay src={eventEmpty} /></div>
          }
        </ul>
        <button className={`clear btnShadow ${arrListEvents.length > 1 ? "show" : "hide"}`} onClick={handlerClearEvents}>clear events</button>
      </section>
      <section className="sectionCalendar">
        <div className="time">
          <p><Time /></p>
          <div className="barDate">{`${daysInWeek[date.getDay()]}, ${daysInMonth[date.getMonth()]}, ${date.getDate()}, ${currYear}`}</div>
        </div>
        <div className="calendar" ref={refCalendar} onMouseOver={handlerHoverCalendar}>
          <div ref={refShadowHover} className="shadowHover"></div>
          <div className="head">
            <span ref={refHeadDate}></span>
            <span>
              <i onClick={handlerPrevDateCalendar}><IoIosArrowUp /></i>
              <i onClick={handlerNextDateCalendar}><IoIosArrowDown /></i>
            </span>
          </div>
          <ul className="listNameWeak">
            <li>su</li>
            <li>mo</li>
            <li>tu</li>
            <li>we</li>
            <li>th</li>
            <li>fr</li>
            <li>sa</li>
          </ul>
          <ul ref={refListNumbDay} className="listNumbDay"></ul>
        </div>
      </section>
    </div >
  );
};

export default Calendar;
