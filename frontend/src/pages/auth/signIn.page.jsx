import { useLanguage } from "../../providers/language.provider";
import { getLanguage } from "../../utils/services/language";

const SignInPage = () => {
    const { language, languages } = useLanguage();
    const title = getLanguage("login_title", language, languages);
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default SignInPage;
