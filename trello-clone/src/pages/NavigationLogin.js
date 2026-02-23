import {Link} from "react-router-dom"
import React from 'react';

function NavigationLogin(){

    return(
        <nav>
            <ul style={{justifyContent: 'space-between'}}>
                <li style={{float: 'none'}}>
                    <Link to="/" style={{fontWeight: 700, fontSize: '1.1rem', background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '1px'}}>
                        TaskFlow
                    </Link>
                </li>
                <div style={{display: 'flex'}}>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </div>
            </ul>
        </nav>
    );
}
export default NavigationLogin;