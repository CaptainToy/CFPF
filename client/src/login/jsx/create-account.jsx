import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import '../css/login.css';
import logo from '../jsx/logo-removebg-preview (1) copy.ico';
import Swal from 'sweetalert2'; // Ensure you have sweetalert2 installed

function CreateAccount() {
    const [userName, setUserName] = useState('');
    const [userId, setUserId] = useState('');
    const [userPass, setUserPass] = useState('');
    const [loading, setLoading] = useState(false);

    const handleReg = async (e) => {
        e.preventDefault();

        // Ensure all fields are filled
        if (!userName || !userId || !userPass) {
            Swal.fire({
                title: 'Error',
                text: 'Please fill in all fields.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
            return;
        }

        setLoading(true);

        try {
            // Create user with Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, userId, userPass);
            const user = auth.currentUser;
            console.log(user);

            // Save user details to Firestore
            await setDoc(doc(db, 'users', user.uid), {
                userName: userName.trim(),
                email: userId.trim(),
            });

            // Show SweetAlert success message and redirect to login
            Swal.fire({
                title: 'Account Created!',
                text: 'Your account was successfully created. Click OK to proceed to login.',
                icon: 'success',
                confirmButtonText: 'OK',
            });
        } catch (error) {
            console.error(error.message);
            Swal.fire({
                title: 'Error',
                text: `Failed to create account: ${error.message}`,
                icon: 'error',
                confirmButtonText: 'OK',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="logo-login">
                    <img src={logo} alt="User Icon" />
                </div>
                <h2>Admin Sign Up</h2>
                <form onSubmit={handleReg}>
                    <div className="input-container">
                        <input
                            type="text"
                            name="userName"
                            placeholder="User Name"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-container">
                        <input
                            type="email"
                            name="userId"
                            placeholder="User ID (Email)"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-container">
                        <input
                            type="password"
                            name="userPass"
                            placeholder="Password"
                            value={userPass}
                            onChange={(e) => setUserPass(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="login-button"
                        disabled={loading}
                    >
                        {loading ? 'Signing Up...' : 'Sign Up'}
                    </button>
                    <p className="forgot-password">
                    You have an account <a href="#">Click to Login</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default CreateAccount;
