import { useLanguage } from "../../providers/language.provider";
import { useForm } from "react-hook-form";
import { getLanguage } from "../../utils/services/language";
import { useNavigate } from "react-router-dom";
import "./SignIn.css"
import { useState } from "react";
import { useLogin } from "../../hooks/auth/auth.hook";
import { FiEye, FiEyeOff } from "react-icons/fi"

const SignInForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { mutate, error, isPending, isError } = useLogin();
    const { language, languages } = useLanguage();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        mutate(data);
    };

    const navigate = useNavigate();

    const loginTitle = getLanguage("login_title", language, languages);
    const loginEmailLabel = getLanguage("login_email_label", language, languages);
    const loginEmailPlaceholder = getLanguage("login_email_placeholder", language, languages);
    const loginPasswordLabel = getLanguage("login_password_label", language, languages);
    const loginPasswordPlaceholder = getLanguage("login_password_placeholder", language, languages);
    const loginButton = getLanguage("login_button", language, languages);
    const loginRegister = getLanguage("login_register", language, languages);
    const loginForgotPassword = getLanguage("login_forgot_password", language, languages);
    const loginPasswordRequired = getLanguage("login_password_require", language, languages)

    return (
        <form className='login' onSubmit={handleSubmit(onSubmit)}>
            <div className='login-container'>
                <span>{loginTitle}</span>
                <div className="login-input">
                    <label>{loginEmailLabel}</label>
                    <input
                        type="text"
                        placeholder={loginEmailPlaceholder}
                        {...register("email", {
                            required: loginPasswordRequired,
                            validate: (value) => {
                                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                return emailRegex.test(value) || "Invalid email";
                            }
                        })} />
                    {errors.email && (
                        <p className="error">{errors.email.message}</p>
                    )}
                </div>

                <div className="login-input">
                    <label>{loginPasswordLabel}</label>
                    <div className="password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder={loginPasswordPlaceholder}
                            {...register("password", {
                                required: "Password is required",
                            })}
                        />
                        <span
                            className="eye-icon"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? < FiEyeOff /> : <FiEye />}
                        </span>
                    </div>
                    {errors.password && (
                        <p className="error">{errors.password.message}</p>
                    )}
                </div>
                <button
                    className="login-button"
                    onClick={() => { }}
                    type="submit"
                    disabled={isPending}
                >
                    {isPending ? "Loading..." : loginButton}
                </button>
                {isError && (
                    <p className="error">
                        {error?.message || "Login failed"}
                    </p>
                )}
                <div className="login-footer">
                    <span onClick={() => navigate("/signup")}>{loginRegister}</span>
                    <span onClick={() => navigate("/forgot-password")}>{loginForgotPassword}</span>
                </div>
            </div>
        </form>
    );
}

export default SignInForm;