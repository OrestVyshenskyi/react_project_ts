import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";

import './project.styles.css'


const Header = () => {

    const [state, setState] = useState(false)

    const chageState = () => {
        setState(prevState => !prevState)
    }
    useEffect(() => {},[state])

    return (
        <div>
            <div>
                <div className={!state?'header_black':'header_white'}>
                    <div><NavLink to={'/'} style={{textDecoration:'none', color:!state?'black':'red'}}>FilmOk</NavLink></div>
                    <div className={'user'}>
                        <img className={'userPhoto'} alt={'user'} src={"https://toppng.com/uploads/preview/circled-user-female-skin-type-4-icon-pro-icon-115534084504dcnr2bmdl.png"}/>
                        <button onClick={chageState}>CHANGE THEME</button>
                    </div>
                </div>
                <div className={'allFilms'}>
                    <NavLink to={'search'} className={!state?'links_black':'links_white'}>Search Films</NavLink>
                    <NavLink to={'films'} className={!state?'links_black':'links_white'}>All Films</NavLink>
                </div>

            </div>
        </div>
    );
};

export default Header;