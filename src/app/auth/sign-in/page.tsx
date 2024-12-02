import AuthWrapper from "@/features/auth/AuthWrapper";
import SignInForm from "@/features/auth/SignInForm";
import SocialAuth from "@/features/auth/SocialAuth";

const SignInPage = () => {
    return (
        <AuthWrapper>
            <SignInForm />
            <SocialAuth />
        </AuthWrapper>
    );
};

export default SignInPage;
