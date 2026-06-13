import React, { useState } from 'react'

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginSubmit, setLoginSubmit] = useState(false);

    const emailOnChange = (e) => {
        setEmail(e.target.value);
        setLoginSubmit(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoginSubmit(true);
    }

    return (
        <>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title" style={{ marginBottom: '10px' }}>
                        <span className="glyphicon glyphicon-log-in"></span>
                        Log In
                    </h3>
                </div>

                <form style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

                    <div className="form-group">
                        {loginSubmit && !email.includes('@') && (<h5 className="text-danger" style={{ marginTop: '0px', marginBottom: '10px', color: '#ff6b6b', fontWeight: 'normal' }}>Email ID is Invalid</h5>)}
                        <input type="text" className="form-control input-v2" id="uid" name="uid" placeholder="Enter your email" onChange={emailOnChange} />
                    </div>
                    <div className="form-group">
                        {loginSubmit && password.length < 6 && (<h5 className="text-danger" style={{ marginTop: '0px', marginBottom: '10px', color: '#ff6b6b', fontWeight: 'normal' }}>Minimum 6 characters password is required</h5>)}
                        <input type="password" className="form-control input-v2" id="pwd" name="pwd" placeholder="Enter your Password" onChange={(e) => { setPassword(e.target.value); setLoginSubmit(false); }} />
                    </div>
                    <button onClick={handleSubmit} className="btn-v2 btn-primary-v2 center-block" style={{ width: '100%', justifyContent: 'center', marginTop: '4px' }}>
                        🔓 Log In
                    </button>
                </form>

            </div>

        </>
    )
}

export default LoginForm