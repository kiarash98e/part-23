import React from 'react'
import { Header, Btn } from './style'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@mui/material'

const header:React.FC = () => {
    
    return (
        <Header>
            <Link component={RouterLink} to={"/"}><Btn>home</Btn></Link>
            <Link component={RouterLink} to={"/films"}><Btn>films</Btn></Link>
            <Link component={RouterLink} to={"/signUp"}><Btn>auth</Btn></Link>
        </Header>
    )
}

export default header
