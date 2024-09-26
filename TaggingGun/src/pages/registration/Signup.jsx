import { useContext, useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import myContext from '../../context/data/myContext';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, fireDB } from '../../fireabase/FirebaseConfig';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import Loader from '../../components/loader/Loader';
import gsap from 'gsap';
import './registration.css';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [PhoneNo, setPhoneNo] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    });

    const context = useContext(myContext);
    const { loading, setLoading } = context;
    const navigate = useNavigate(); // Use navigate hook

    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const signupFormRef = useRef(null); 
    const videoRef = useRef(null); 

    useEffect(() => {
        gsap.fromTo(signupFormRef.current, { opacity: 0, y: -20 }, { duration: 0.8, opacity: 1, y: 0, ease: 'power2.out' });
        gsap.fromTo(videoRef.current, { opacity: 0, x: 20 }, { duration: 1.2, opacity: 1, x: 0, ease: 'power2.out', delay: 0.3 });
    }, []);

    const handleAvatar = e => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            });
        }
    };

    const signup = async () => {
        if (name === "" || email === "" || password === "" || confirmPassword === "") {
            return toast.error("All fields are required");
        }

        if (password !== confirmPassword) {
            return toast.error("Passwords do not match");
        }

        if (!passwordRegex.test(password)) {
            return toast.error("Password must be at least 8 characters, include letters, numbers, and special characters");
        }

        setLoading(true);

        try {
            const signInMethods = await fetchSignInMethodsForEmail(auth, email);
            if (signInMethods.length > 0) {
                toast.error("Email already exists. Please login.");
                setLoading(false);
                return;
            }

            const users = await createUserWithEmailAndPassword(auth, email, password);

            const user = {
                name: name,
                uid: users.user.uid,
                email: users.user.email,
                time: Timestamp.now(),
            };
            const userRef = collection(fireDB, "users");
            await addDoc(userRef, user);

            toast.success("Signup Successfully");
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            
            // Redirect to login page after successful sign up
            navigate('/login');

        } catch (error) {
            console.log(error);
            toast.error("An error occurred during signup");
        } finally {
            setLoading(false);
        }
    };

    const googleSignUp = async () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            const userEmail = result.user.email;

            // Check if email already exists
            const signInMethods = await fetchSignInMethodsForEmail(auth, userEmail);
            if (signInMethods.length > 0) {
                toast.error("Email already exists. Please login.");
                setLoading(false);
                return;
            }

            localStorage.setItem('user', JSON.stringify(result));
            toast.success('Signup with Google successful', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            navigate('/'); // Redirect to the homepage after successful Google signup
        } catch (error) {
            console.error("Error during Google signup", error);
            toast.error("An error occurred during Google signup", {
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

    return (
        <div className="signup-container">
            {loading && <Loader />}
            <div ref={signupFormRef} className="signup-form">
                <h1 className="signup-title">Signup</h1>
                
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
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    className="input-field"
                    placeholder="Username"
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    className="input-field"
                    placeholder="Email"
                />
                <input
                    type="tel"
                    value={PhoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                    className="input-field"
                    placeholder="PhoneNo"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setPasswordFocused(true)} 
                    onBlur={() => setPasswordFocused(false)} 
                    className="input-field"
                    placeholder="Password"
                />
                {passwordFocused && (
                    <p className="password-helper-text">
                        Password must be at least 8 characters, contain letters, numbers, and special characters.
                    </p>
                )}
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="input-field"
                    placeholder="Confirm Password"
                />
                <button onClick={signup} className="signup-button">
                    Signup
                </button>
                
                {/* Google Signup Button with Icon */}
                <button onClick={googleSignUp} className="signup-button google-signup-button">
                    <img src="public/index2.png" alt="Google Logo" className="google-icon" />
                    Sign Up with Google
                </button>

                <h2 className="login-link">
                    Have an account? <Link to={'/login'}>Login</Link>
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

export default Signup;
