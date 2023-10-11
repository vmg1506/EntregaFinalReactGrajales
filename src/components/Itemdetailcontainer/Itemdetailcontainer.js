import React, { useState, useEffect } from 'react'
import './Itemdetailcontainer.css'
import Itemdetail from '../Itemdetail/Itemdetail'
import { getSingleItem } from '../../utils/firestore'
import {useParams} from 'react-router-dom'
import Loader from '../Loader/Loader'
import logo from '../../assets/logo.webp'
function Itemdetailcontainer() {
    const [data, setData] = useState({}); 
    const [error, setError] = useState(false)
    const params = useParams()
    const id = params.id
    useEffect(() => {
        getSingleItem(id)
            .then((respuestaDatos) => setData(respuestaDatos))
            .catch((errormsg) => setError(errormsg.message))
    }, [id]) 

    if (!data.title) { 
        return (
        <div>
            {error ? <h2>{error}</h2> : <Loader/>}
        </div>
        ) 
    }

    return (
        <>
            <div className='item-detail__container'>
                <Itemdetail
                    id={data.id}
                    title={data.title}
                    detail={data.description}
                    img={data.imageProduct}
                    stock={data.stock}
                    price={data.price}
                    />
                
            </div> 
            <div className='app__game-container barra'>
                <img src={logo} alt="logo gaming" className='app__game-logo brazo-up'></img>
            </div>
        </>
    )
}
export default Itemdetailcontainer