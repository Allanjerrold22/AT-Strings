import React, {useState} from 'react'
import Search from '../assets/Search.svg'


const SearchBar = () => {
    return(
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:20}}>
            <div style={{width:340,height:46,backgroundColor:'#EEEE',borderRadius:12}}>
                <div style={{display:'flex',justifyContent:'right'}}>
                <div style={{width:46,height:46,backgroundColor:'#252525',display:'flex',justifyContent:'center',borderRadius:10,alignItems:'center'}}> 
                <img src={Search} style={{width:24,height:24}}/>
                </div>
                </div>

            </div>

        </div>
    )
}

 

export default SearchBar;