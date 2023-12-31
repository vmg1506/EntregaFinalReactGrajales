import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './Cart.css'
import './Cartmini.css'
import { Link} from 'react-router-dom'

function Cartmini() {
    const { cart, deleteItem,  getItemPrice, emptyCart } = useContext(CartContext)


    return (
        <div className='mini-container'>
            <div className='mini__inner'>
                <div className='mini__itemlist-container'>
                    <div className='cart__item-container'>
                        <div className="cart__image-box">
                        </div>
                        <div className="cart__name-box">
                            <h3 className="nombre--producto">Nombre</h3>
                        </div>
                        <div className="cart__quantity-box">
                            <p>Cantidad</p>
                        </div>
                        <div className="cart__price-box">
                            <p>Precio</p>
                        </div>
                        <div className="cart__remove">
                            
                        </div>
                    </div>
                    { (cart.length === 0) ? <h2>Carrito vacío</h2> :
                        cart.map((item) => {
                            return (
                                <div className='cart__item-container' key={item.id}>
                                    <div className="cart__image-box">
                                        <img src={item.img} width='45rem' alt='item'></img>
                                    </div>
                                    <div className="cart__name-box">
                                        <h3 className="nombre--producto">{item.title}</h3>
                                    </div>
                                    <div className="cart__quantity-box">
                                           <p>{item.cantidad}</p>
                                    </div>
                                    <div className="cart__price-box">
                                        <p>${(item.price * item.cantidad).toLocaleString()}</p>
                                    </div>
                                    <div className="cart__remove">
                                        <button className="btn btn--quitar--producto"  onClick={() => deleteItem(item.id)}>Quitar producto</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                { (cart.length === 0) ? "" : 
                    <div className='cart__btns'>
                        <div className='cart__goback-container'>
                            <button className='btn' onClick={() => emptyCart()}>Vaciar carrito</button>
                        </div>
                    </div>  
                }
                { (cart.length === 0) ? 
                    <div className='cart__checkout-container cart-mini__checkout-container'>
                    </div> :
                    <div className='cart__checkout-container cart-mini__checkout-container'>
                        <div className='cart__checkout-total'>
                            <div   div className='cart__subtotal'>  
                                <h3>Subtotal:</h3>
                                <h3>{getItemPrice()}</h3>
                            </div>
                            <div className='cart__envio'>
                                <h3>Envío:</h3>
                                <h3>35500</h3>
                            </div>
                            <div className='cart__total'>   
                                <h2>Total (más envío):</h2>
                                <h2>{getItemPrice() + 35500}</h2>
                            </div>
                        </div>
                        <div className='cart__btns'>
                            
                                <div className='cart__goback-container'>
                                    <Link to="./cart"><button className='btn'>Ir al carrito</button></Link>
                                </div>
                                <div className='cart__goback-container'> 
                                <Link to="/checkout">
                                    <button className='btn'>Terminar mi compra</button>  
                                </Link>
                                </div>
                        </div>  
                    </div>
                }
            </div>
        </div>
    )
}

export default Cartmini