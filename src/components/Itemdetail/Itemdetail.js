import Addtocart from '../Addtocart/Addtocart'
import './Itemdetail.css'
import '../Addtocart/Addtocart.css'
import shipcar from '../../assets/icons/shipcar.png'
import card from '../../assets/icons/card.png'
import { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import toast, { Toaster } from 'react-hot-toast';
function Itemdetail(props) {
    let [estadoItemDetail, setEstadoItemDetail] = useState(false)
    let { addItem } = useContext(CartContext)
 
    function handleAddToCart(count){ // add to cart with toaster alert.
        const thetoast = () => {
            return toast(`agregaste ${count} items al carrito!`);
        }
        
        setEstadoItemDetail(true)
        addItem(props, count)
        thetoast()
    }

    return ( 
        <div className='item-detail__outer'>
            <div className="item-detail__inner">
                <div className="item-detail__title-container">
                    <h1 className='item-detail__title'>
                        {props.title}
                    </h1>
                </div>   
                <div className="item-detail__image-container">
                    <img className="item-detail__image" src={props.img} alt={props.title} />
                </div>
                <div className="item-detail__detail-container">
                    <p>
                        {props.detail}
                    </p>
                </div>
                <div className="item-detail__sales-data">
                    <h2 className='item-detail__price'>${props.price}</h2>
                    <p className='item-detail__envios-p'>Envios se realizan a todo colombia</p>
                    <div>
                        <img src={card} alt="card" width={60}/>
                    </div>
                    <div>
                        <img src={shipcar} alt="car" width={60}/>
                    </div>
                    <div className='item-detail__itemcount'>
                        
                            { props.stock === 0 ? <div className='item-detail__agotado'><h3>Producto agotado</h3></div> :  estadoItemDetail === false ? <Addtocart stock={props.stock} onAddToCart={handleAddToCart} initial="1"/> : <Link to="/cart" ><div className='flexbtn'><button className='item-count__btn-add'> Finalizar compra </button></div></Link> }
                       
                        
                    </div>
                    <Toaster
                containerStyle={{
                  top: 10,
                }}
                toastOptions={{
                  duration: 4000,
                }}
              />
                </div>
            </div>
            
        </div> 
    )
}

export default Itemdetail