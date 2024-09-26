/* eslint-disable react/no-unescaped-entities */
import { useContext, useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import myContext from '../../context/data/myContext';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../fireabase/FirebaseConfig';
import Loader from '../../components/loader/Loader';
import gsap from 'gsap'; 
import './registration.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const context = useContext(myContext);
    const { loading, setLoading } = context;
    const navigate = useNavigate(); // Use navigate hook

    const loginFormRef = useRef(null); // Ref for login form
    const videoRef = useRef(null); // Ref for video

    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    });

    useEffect(() => {
        gsap.fromTo(loginFormRef.current, { opacity: 0, y: -20 }, { duration: 0.8, opacity: 1, y: 0, ease: 'power2.out' });
        gsap.fromTo(videoRef.current, { opacity: 0, x: 20 }, { duration: 1.2, opacity: 1, x: 0, ease: 'power2.out', delay: 0.3 });
    }, []);

    const login = async () => {
        if (email === "" || password === "") {
            return toast.error("Both fields are required");
        }

        setLoading(true);
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem('user', JSON.stringify(result));
            toast.success('Signin Successfully', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            navigate('/'); // Use navigate for redirection
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                toast.error("Email doesn't exist", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            } else if (error.code === 'auth/wrong-password') {
                toast.error('Incorrect password', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            } else {
                toast.error('Signin Failed', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        } finally {
            setLoading(false);
        }
    };

    const googleSignIn = async () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        
        try {
            const result = await signInWithPopup(auth, provider);
            localStorage.setItem('user', JSON.stringify(result));
            toast.success('Login with Google successful', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            navigate('/'); // Redirect to the homepage after successful login
        } catch (error) {
            console.error("Error during Google sign-in", error);
            toast.error("An error occurred during Google login", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } finally {
            setLoading(false);
        }
    };

    const handleAvatar = e => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            });
        }
    };

    return (
        <div className="login-container">
            {loading && <Loader />}
            <div ref={loginFormRef} className="login-form">
                <h1 className="login-title">Login</h1>
                <div className="image-upload">
                    <label htmlFor="file" className="upload-label">
                        <img
                            src={avatar.url || "https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033967.jpg?ga=GA1.1.967407136.1708519265"}
                            alt="Upload Avatar"
                            className="upload-image"
                        />
                        <span className="upload-text">Upload Image</span>
                    </label>
                    <input
                        type="file"
                        name="file"
                        id="file"
                        style={{ display: "none" }}
                        onChange={handleAvatar}
                    />
                </div>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field"
                    placeholder="Email"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field"
                    placeholder="Password"
                />
                <button onClick={login} className="login-button">
                    Login
                </button>
                <button onClick={googleSignIn} className="google-signin-button">
                    <img src="public/index2.png" alt="Google Icon" className="google-icon" />
                    Sign in with Google
                </button>
                <h2 className="signup-link">
                    Don't have an account? <Link to={'/signup'}>Signup</Link>
                </h2>
            </div>
            <div ref={videoRef} className="vid-bg">
                <iframe
                    width="506"
                    height="584"
                    src="https://www.youtube.com/embed/BlImkK5vPWw?autoplay=1&loop=1&playlist=BlImkK5vPWw"
                    title="How to use a tagging gun - Morplan's tagging gun range"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

export default Login;
