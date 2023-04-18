import { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { selectCurrentUser } from '../../store/user/user.selector';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartDropDownList from '../../Components/cart-dropdown/cart-dropdown.component';

import { NavigationContainer, 
        LogoContainer, 
        RightSubContainer, 
        CartIcon, 
        CartCountContainer,
        ProfileIconContainer,
        ProfileBoxOptions,
        Links,
    } from './navigation.styles';

import { HiShoppingCart } from 'react-icons/hi';
import { IoPersonCircle } from 'react-icons/io5';
import { FaFileContract } from 'react-icons/fa';
import { MdLogin, MdLogout } from 'react-icons/md';
import { BsShop, BsHeartFill } from 'react-icons/bs';


const  Navigation = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);
    const [ profileState, setProfileState ] = useState(false); 

    const toggleIsCartOpen = () => {
      dispatch(setIsCartOpen(!isCartOpen));
      setProfileState(false)
    }
    const handleSignOutUser = () => {
        signOutUser()
        window.location.reload()
    }
    const openProfileMenu = () => {
        setProfileState(!profileState);
        dispatch(setIsCartOpen(false));
    }

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    E-Market
                </LogoContainer>
                <RightSubContainer>
                    <CartIcon onClick={toggleIsCartOpen}>
                        <HiShoppingCart size={25}/>
                    </CartIcon>
                    <CartCountContainer>{cartCount}</CartCountContainer>
                    {isCartOpen && <CartDropDownList/> }
                    <ProfileIconContainer onClick={openProfileMenu}>
                        <IoPersonCircle size={25}/>
                    </ProfileIconContainer>
                    {profileState && 
                        <ProfileBoxOptions>
                            <Links to=''  onClick={() => setProfileState(false)}>
                                <IoPersonCircle size={25}/>
                                Profile
                            </Links>
                            <Links  to='/shop' onClick={() => setProfileState(false)}>
                                <BsShop size={25}/>
                                Shop
                            </Links>
                            <Links to='saved' onClick={() => setProfileState(false)}>
                                <BsHeartFill size={25}/>
                                Saved
                            </Links>
                            <Links to='' onClick={() => setProfileState(false)}>
                                <FaFileContract size={25}/>
                                Terms & Conditions
                            </Links>
                            {currentUser ? (
                                <Links to='/auth' onClick={handleSignOutUser}>
                                    <MdLogout size={25}/>
                                    Sing Out
                                </Links>
                            ) : (
                                <Links to='/auth' onClick={() => setProfileState(false)}>
                                    <MdLogin size={25}/>
                                    Sing In
                                </Links>                                                 
                            )}
                        </ProfileBoxOptions>                        
                    }
                </RightSubContainer>
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    );
}

export default Navigation;