import React, { useState } from 'react'
import './login.css'

import { MdPersonOutline, MdLock, MdInput } from "react-icons/md"
import { HiEye, HiEyeOff } from "react-icons/hi"

function Login() {
   const [usuario, setUsuario] = useState("")
   const [password, setPassword] = useState("")
   const [show, setShow] = useState(false)

   const handleClick = (e) => {
      e.preventDefault()
      setShow(!show);
   }

   return (
      <div className="login">

         <div className="login-right">
            <h1>THINK FORNECEDOR</h1>

            <div className="login-loginInputUsuario">
               <MdPersonOutline />
               <input
                  type="usuario"
                  placeholder="Usuário"
                  value={usuario}
                  onChange={e => setUsuario(e.target.value)}
               />
            </div>

            <div className="login-loginInputPassword">
               <MdLock />
               <input
                  placeholder="Senha"
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
               />
               <div className="login-eye">
                  {show ? (
                     <HiEye
                        size={20}
                        onClick={handleClick}
                     />
                  ) : (
                     <HiEyeOff
                        size={20}
                        onClick={handleClick}
                     />
                  )}
               </div>
            </div>

            <button type="submit">

               LOGIN <MdInput/>

            </button>

            <h2>Think!</h2>
            <h4>Soluções em software e gestão</h4>

         </div>
      </div>
   )
}

export default Login