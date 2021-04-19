import React from 'react'
import { Button, TextField } from '@material-ui/core';
import logo from '../images/recipee_logo.png'
import "./Header.css"
import { useState } from 'react';

function Header({getSearchf}) 
{
    const [search,setSearch]=useState("");

    const searchHandler=()=>{
        if(search=="")
        {
            alert("Please enter something");
        }
        else{
            getSearchf(search);
            setSearch("");
        }
    }
    return (
        <div className="head">
            <div><img src={logo} alt="no" width="200px" /></div>
            <div className="form">
            <TextField id="standard-basic" label="Enter Here" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
            <Button variant="outlined" color="primary" href="#outlined-buttons" onClick={searchHandler}>Search</Button>
            </div>
        </div>
    )
}

export default Header
