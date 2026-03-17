import { useState } from "react";
import { useSignUp } from "../../../hooks/auth/auth.hook.js";
import { useLanguage } from "../../../providers/language.provider.jsx";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi"
import { getLanguage } from "../../../utils/services/language.js";
import "./SignUp.css"

const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { mutate, error, isPending, isError } = useSignUp();
    const { language, languages } = useLanguage();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        mutate(data);
    };

    const navigate = useNavigate();

    const registerText = getLanguage("register", language, languages);
    const loginText = getLanguage("login_title", language, languages);

    const nameLabel = getLanguage("register_name_label", language, languages);
    const namePlaceholder = getLanguage("register_name_placeholder", language, languages);
    const nameRequired = getLanguage("register_name_required", language, languages);

    const emailLabel = getLanguage("login_email_label", language, languages);
    const emailPlaceholder = getLanguage("login_email_placeholder", language, languages);

    const passwordLabel = getLanguage("login_password_label", language, languages);
    const passwordPlaceholder = getLanguage("login_password_placeholder", language, languages);

    const confirmPasswordLabel = getLanguage("register_confirm_password_label", language, languages);
    const confirmPasswordPlaceholder = getLanguage("register_confirm_password_placeholder", language, languages);

    const passwordDoNotMatch = getLanguage("register_password_do_not_match", language, languages);

    const passwordRequired = getLanguage("login_password_require", language, languages);
    const emailRequired = getLanguage('login_email_require', language, languages);
    const invalidEmail = getLanguage('login_email_invalid', language, languages)

    return (
        <form className='register' onSubmit={handleSubmit(onSubmit)}>
            <div className='register-container'>
                <span>{registerText}</span>
                <div className="register-input">
                    <label>{nameLabel}</label>
                    <input
                        type="text"
                        placeholder={namePlaceholder}
                        {...register("name", {
                            required: nameRequired,
                        })} />
                    {errors.name && (
                        <p className="error">{errors.name.message}</p>
                    )}
                </div>
                <div className="register-input">
                    <label>{emailLabel}</label>
                    <input
                        type="text"
                        placeholder={emailPlaceholder}
                        {...register("email", {
                            required: emailRequired,
                            validate: (value) => {
                                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                return emailRegex.test(value) || invalidEmail;
                            }
                        })} />
                    {errors.email && (
                        <p className="error">{errors.email.message}</p>
                    )}
                </div>

                <div className="register-input">
                    <label>{passwordLabel}</label>
                    <div className="password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder={passwordPlaceholder}
                            {...register("password", {
                                required: passwordRequired,
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
                <div className="register-input">
                    <label>{confirmPasswordLabel}</label>
                    <div className="password-wrapper">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder={confirmPasswordPlaceholder}
                            {...register("confirmPassword", {
                                required: passwordRequired,
                                validate: (value) => {
                                    const password = watch("password");
                                    return value === password || passwordDoNotMatch;
                                }
                            })}
                        />
                        <span
                            className="eye-icon"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? < FiEyeOff /> : <FiEye />}
                        </span>
                    </div>
                    {errors.confirmPassword && (
                        <p className="error">{errors.confirmPassword.message}</p>
                    )}
                </div>

                <button
                    className="register-button"
                    type="submit"
                    disabled={isPending}
                >
                    {isPending ? "Loading..." : registerText}
                </button>
                {isError && (
                    <p className="error">
                        {error?.message || "Register failed"}
                    </p>
                )}
                <div className="register-footer">
                    <span onClick={() => navigate("/signin")}>{loginText}</span>
                </div>
            </div>
        </form>
    );
}

export default SignUpForm;