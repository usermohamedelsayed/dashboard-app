import React from 'react'
import "./CreateUser.scss"
import { CaptionPage } from '../../component'
import { IoIosArrowDown } from 'react-icons/io'
import { Player } from '@lottiefiles/react-lottie-player'
import motionAddUser from "../../animation/createUser.json"
import { useRef } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUserRedux } from '../../store/dataUsers'
import swal from 'sweetalert'
const CreateUser = () => {
    const refBoxRole = useRef(null)
    const refArrowRol = useRef(null)
    const refTitleBoxRole = useRef(null)
    const refInpFristName = useRef(null)
    const refInpLastName = useRef(null)
    const refInpEmail = useRef(null)
    const refInpPhone = useRef(null)
    const refInpAge = useRef(null)
    const refInpAddress = useRef(null)
    const dispatch = useDispatch()
    const { dataTableUsers } = useSelector(state => state.dataUsersSlice)
    useEffect(() => {
        refBoxRole.current.style.height = "50px"
    }, [])
    const handlerToggleBoxRole = () => {
        if (refBoxRole.current.style.height === "50px") {
            refBoxRole.current.style.height = refBoxRole.current.scrollHeight + "px"
            refArrowRol.current.className = "open"
        } else {
            refBoxRole.current.style.height = "50px"
            refArrowRol.current.className = ""
        }
    }
    const handlerSelectedRole = (e) => {
        refTitleBoxRole.current.innerText = e.target.innerText
        refBoxRole.current.style.height = "50px"
        refArrowRol.current.className = ""
    }
    const handlerCreateUser = (e) => {
        e.preventDefault()
        let objDetaUser = {
            id: dataTableUsers[dataTableUsers.length - 1][dataTableUsers[dataTableUsers.length - 1].length - 1].id + 1,
            zipcode: Math.floor(Math.random() * 3000),
            fristname: refInpFristName.current.value.toLowerCase(),
            lastname: refInpLastName.current.value.toLowerCase(),
            fullname: refInpFristName.current.value.toLowerCase() + " " + refInpLastName.current.value.toLowerCase(),
            email: refInpEmail.current.value.toLowerCase(),
            phone: refInpPhone.current.value.toLowerCase(),
            age: +refInpAge.current.value.toLowerCase(),
            address: refInpAddress.current.value.toLowerCase(),
            access: refTitleBoxRole.current.innerText.toLowerCase() === "role" ? "user" : refTitleBoxRole.current.innerText.toLowerCase(),
        }
        dispatch(addUserRedux(objDetaUser))
        setTimeout(() => {
            refInpFristName.current.value = ""
            refInpLastName.current.value = ""
            refInpFristName.current.value = ""
            refInpEmail.current.value = ""
            refInpPhone.current.value = ""
            refInpAge.current.value = ""
            refInpAddress.current.value = ""
        }, 60)
        swal({
            title: "Good job!",
            text: "it has been added successfully!",
            icon: "success",
        });
    }
    return (
        <div className='CreateUser'>
            <CaptionPage caption={"create user"} desc={"create a new user"} />
            <form className="containerContent" onSubmit={handlerCreateUser}>
                <div className="motionCreateUser">
                    <Player loop autoplay speed={.4} src={motionAddUser} />
                </div>
                <div className="containerInps">
                    <input required ref={refInpFristName} type="text" placeholder='Frist name' />
                    <input required ref={refInpLastName} type="text" placeholder='Last name' />
                    <input required ref={refInpEmail} type="email" placeholder='Email' />
                    <input required ref={refInpPhone} type="tel" placeholder='Phone' />
                    <input required ref={refInpAge} type="number" placeholder='Age' />
                    <input required ref={refInpAddress} type="text" placeholder='Address' />
                </div>
                <div ref={refBoxRole} className="role">
                    <p onClick={handlerToggleBoxRole} className="title">
                        <span ref={refTitleBoxRole}>role</span>
                        <i ref={refArrowRol}><IoIosArrowDown /></i>
                    </p>
                    <div>
                        <span onClick={handlerSelectedRole}>user</span>
                        <span onClick={handlerSelectedRole}>admin</span>
                        <span onClick={handlerSelectedRole}>manager</span>
                    </div>
                </div>
                <button className='btnShadow'>create user</button>
            </form>
        </div>
    )
}

export default CreateUser