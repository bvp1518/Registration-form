// ================================================================
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function FormValue() {
    const [signin, setSignin] = useState(true);
    const [isWrongPassword, setIsWrongPassword] = useState(" ")
    const navigation = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        const Name = e.target.name.value;
        // console.log("Name ===>", Name);
        const Email = e.target.email.value;
        // console.log("Email ===>", Email);
        const Password = e.target.password.value;
        // console.log("Password ===>", Password);

        if (Email && Password) {
            if (!localStorage.getItem('user')) {
                localStorage.setItem('user', JSON.stringify([{ name: Name, email: Email, password: Password }]))
                // navigation("/home")
            } else {
                localStorage.removeItem('user')
                localStorage.setItem('user', JSON.stringify([{ name: Name, email: Email, password: Password }]))
                // navigation("/home")
            }
        }
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        const Email = e.target.email.value;
        console.log("Email ===>", Email);
        const Password = e.target.password.value;
        console.log("Password ====>", Password);

        if (Email && Password) {
            console.log(localStorage.getItem('user'));

            if (!localStorage.getItem('user')) {
                navigation("/home")
            } else {
                console.log('Please sign in with right email & password.');
            }
        }

// =========================================


        const userData = JSON.parse(localStorage.getItem('user'));


        const localStorageEmail = userData[0].email;
        const localStoragePassword = userData[0].password;
        if (userData && userData.length > 0) {

            console.log("localStorageEmail==========>", localStorageEmail === Email);
            console.log("localStoragePassword======>", localStoragePassword === Password);
        } else {
            console.log("No user data found in localStorage.");
        }

        if (userData && localStorageEmail === Email && localStoragePassword === Password) {
            alert("Sign in successful");
            navigation("/home")

        } else {
                setIsWrongPassword("Please enter valid Password.")
              
           }

           }
    
        const handleSubmit = (e) => {
            e.preventDefault();

            if (signin) {
                handleSignIn(e);
                // navigation("/")
            } else {
            setSignin(!signin);
                handleSignup(e);
            }

            e.target.reset();
        };

        return (
            <div className="mt-5">
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        {!signin && <div data-mdb-input-init className="form-outline mb-4">
                            <label className="form-label" forhtml="form2Example2">Name</label>
                            {/* <input type="name" name="name" id="form2Example2" className="form-control" /> */}
                        </div>}

                        <div data-mdb-input-init className="form-outline mb-4">
                            <label className="form-label" forhtml="form2Example1">Email address</label>
                            <input type="email" name="email" id="form2Example1" className="form-control" />
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                            <label className="form-label" forhtml="form2Example2">Password</label>
                            <input type="password" name="password" id="password" className="form-control" />
                            <span>{isWrongPassword}</span>
                        </div>

                        <div className="row mb-4">

                            <button
                                type="submit" data-mdb-button-init data-mdb-ripple-init
                                className="btn btn-primary btn-block mb-4"
                            >
                                {signin ? "Sign in" : "Register"}
                            </button>

                            <div className="text-center">
                                <p>Not a member?
                                    <Link to="#!"
                                        onClick={() => setSignin(!signin)}
                                    >
                                        {!signin ? "Sign in" : "Register"}
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
export default FormValue;



