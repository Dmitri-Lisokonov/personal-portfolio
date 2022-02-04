import { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
    const [formIndex, setFormIndex] = useState(1);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const login = () => {
        console.log("hi");
    }
    return (
        <div className="wrapper fadeInDown">
            {
                formIndex === 1 ?
                    <div id="formContent">
                        <h2 id="sign-in" className="active" onClick={() => setFormIndex(1)}> Sign In</h2>
                        <h2 id="sign-up" className="inactive underlineHover" onClick={() => setFormIndex(2)}>Sign Up</h2>
                        <div className="fadeIn first">
                            <img src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/9580547601553228570-512.png" id="icon" alt="User Icon" />
                        </div>
                        <form>
                            <input type="text" id="login" className="fadeIn second" name="login" placeholder="SIGN IN EMAIL" />
                            <input type="password" id="password" className="fadeIn third" name="login" placeholder="PASSWORD" />
                            <input type="submit" className="fadeIn fourth" value="Log In" onClick={() => login} />
                        </form>
                        <div id="formFooter">
                            <a id="forgot-password" className="underlineHover" href="#" onClick={() => setFormIndex(3)}>Forgot Password?</a>
                        </div>
                    </div>
                    :
                    formIndex === 2 ?
                        <div id="formContent">
                            <h2 id="sign-in" className="inactive underlineHover" onClick={() => setFormIndex(1)}> Sign In</h2>
                            <h2 id="sign-up" className="active" onClick={() => setFormIndex(2)}>Sign Up</h2>
                            <div className="fadeIn first">
                                <img src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/9580547601553228570-512.png" id="icon" alt="User Icon" />
                            </div>
                            <form>
                                <input type="text" id="login" className="fadeIn second" name="login" placeholder="SIGN UP EMAIL" onChange={event => setUsername(event.target.value)} />
                                <input type="password" id="password" className="fadeIn third" name="login" placeholder="PASSWORD" onChange={event => setPassword(event.target.value)} />
                                <input type="submit" className="fadeIn fourth" value="Log In" onClick={() => login} />
                            </form>
                            <div id="formFooter">
                                <a id="forgot-password" className="underlineHover" href="#" onClick={() => setFormIndex(3)}>Forgot Password?</a>
                            </div>
                        </div>
                        :
                        <div id="formContent">
                            <h2 id="sign-in" className="inactive underlineHover" onClick={() => setFormIndex(1)}> Sign In</h2>
                            <h2 id="sign-up" className="inactive underlineHover" onClick={() => setFormIndex(2)}>Sign Up</h2>
                            <div className="fadeIn first">
                                <img src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/9580547601553228570-512.png" id="icon" alt="User Icon" />
                            </div>
                            <form>
                                <input type="text" id="login" className="fadeIn second" name="login" placeholder="EMAIL" onClick={() => login} />

                            </form>
                            <div id="formFooter">
                                <a id="forgot-password" className="active" href="#" onClick={() => setFormIndex(3)}>Forgot Password?</a>
                            </div>
                        </div>

            }

        </div>
    )
}

export default LoginPage;