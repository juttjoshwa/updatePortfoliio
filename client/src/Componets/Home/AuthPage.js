import React, { useState, } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    // console.log(View)
    const navigate = useNavigate()

    const handleClick = () => {
        return navigate("/home")
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        // check if the password is correct
        if (password === 'yashwa') {
            setIsAuthenticated(true);
            setIsAdmin(true);
        } else {
            setIsAuthenticated(true);
        }
    };

    if (isAuthenticated && isAdmin) {
        return navigate("/Admin");
    }
    if (isAuthenticated) {
       return  navigate("/home");
    }

    return (
        <>
            <div style={{
            }} data-aos="fade-up" data-aos-anchor=".other-element" data-aos-duration="1000" >
                <div className='customMargin' style={{
                    marginTop: "19ch",
                }}>
                    <h1 style={{
                        fontWeight: 700,
                        filter: " drop-shadow(.1px .1px 1px #015)",
                    }}>Are you Admin</h1>
                </div>
                <p className='customMargin'>If AdminPass is not ture you will redirect to<span className='fw-bold m-1'>userPage</span></p>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className='customMargin'>
                            <input
                                style={{
                                    borderRadius: "8px",
                                    marginLeft: "3px"
                                }}
                                type="password"
                                value={password}
                                autoFocus
                                className="form"
                                onChange={(event) => setPassword(event.target.value)}
                                id="inputPassword" />
                            <button type='submit' style={{
                                marginLeft: "2px"
                            }} className='btn btn-outline-success'>Admin</button>
                        </div>
                    </form>
                    <div className='customMargin' style={{
                        marginTop: "2ch",
                        marginRight: "6ch",
                    }}>
                     <button className='btn btn-outline-info' onClick={handleClick}>View as a Client</button>
                        {/* <button onClick={()=>{handleClickofView();}} >in</button> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthPage;
