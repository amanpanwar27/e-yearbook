import React,{useState, useEffect} from 'react'
import './Login.css'

const Login = () => {
    const [state, setState] = useState('email')
    const [flow, setFlow] = useState('login')

    // useEffect(() => {

    // }, [])
    const getClass = () => {
        let clasUsed = ''
        if(flow === 'login'){
            clasUsed = 'container'
        }else if(flow === 'signup'){
            clasUsed = 'container right-panel-active'
        }
        return clasUsed
    }
    return(
        <>
        <div className={getClass()} id="container">
            <div className="form-container sign-up-container">
                <form action="#">
                    <h1 style={{marginBottom: '20px'}}>Create Account</h1>
                    <span>or use your email for registration</span>
                    {state === 'email' && <input type="email" placeholder="Email" />}
                    {state === 'otp' && <input type="password" placeholder="otp" />}
                    <button style={{marginTop: '20%'}}>Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1 style={{paddingBottom: '30px'}}>Sign in</h1>
                    <input type="email" placeholder="Email (xyz@gbpuat-tech.ac.in)" />
                    <input type="password" placeholder="Password" />
                    <a href="#">Forgot your password?</a>
                    <button onClick={() => setFlow('login')}>Sign In</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost" id="signIn" onClick={() => setFlow('login')}>Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button className="ghost" id="signUp" onClick={() => setFlow('signup')}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>

        {/* <footer>
            <p>
                Created with <i className="fa fa-heart"></i> by
                <a target="_blank" href="https://florin-pop.com">Florin Pop</a>
                - Read how I created this and how you can join the challenge
                <a target="_blank" href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/">here</a>.
            </p>
        </footer> */}
        </>
    )
}
export default Login
