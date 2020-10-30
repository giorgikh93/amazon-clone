import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from './StateProvider'
import { auth } from './firebase';

function Header(props) {
    const [{ basket, user }] = useStateValue()
    function login() {
        if (user) {
            auth.signOut()
        }
    }
    return (
        <nav className='header'>
            <Link to='/'>
                <img
                    className='header__logo'
                    src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon logo' />
            </Link>
            <div className='header__search'>
                <input type='text' className='header__searchInput' />
                <SearchIcon className='header__searchIcon' />
            </div>

            <div className='header__nav'>
                <Link to={!user && '/login'} className='header__link'>
                    <div onClick={login} className='header__option'>
                        <span className='header__optionOne'>hello </span>
                        <span className='header__optionTwo'>{basket.user ? 'Sign in' :' Sign out'} </span>
                    </div>
                </Link>

                <Link to='/' className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionOne'>Returns</span>
                        <span className='header__optionTwo'>&Orders</span>
                    </div>
                </Link>

                <Link to='/login' className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionOne'>Your</span>
                        <span className='header__optionTwo'>Prime</span>
                    </div>
                </Link>
            </div>
            <Link to='/checkout' className='header__link'>
                <div className='header__optionBasket'>
                    <ShoppingBasketIcon />
                    <span className='haeder__optionTwo header__basketCount'>{basket?.length}</span>
                </div>

            </Link>
        </nav>
    );
}

export default Header;