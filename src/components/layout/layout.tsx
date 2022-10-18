import React from 'react'
import Header  from '../layout/header/header'
import Main from './main/main'

const Layout:React.FC = () => {
    return (
        <div style={{display: 'flex',flexDirection:"column",width:"100%",height:"100%"}}>
            <Header/>  
            <div style={{flexGrow:"1"}}>
                <Main/>
            </div>
        </div>
    )
}

export default Layout
