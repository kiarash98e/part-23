import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Film, Films, Home } from '../../../pages/index'
import Loading from '../../loading/loading'



const Main:React.FC = () => {
    
    return (
        <main style={{
            margin: "0 auto",
            padding: "1rem",
            width:"95%",
        }}>
            <div style={{marginTop:"60px"}}>
                <Loading/>
            </div>
            <Routes>
                <Route path='/' element={<Home />} /> 
                <Route path='/films' element={<Films />} />
                <Route path="/films/:filmId" element={<Film />}/> 
                <Route path='char' element={<></>} >
                    <Route path=':charId' element={<></>} />
                </Route> 
            </Routes>
        </main>
    )
}

export default Main
