import AuthWrapper from "@/features/auth/AuthWrapper";
import SignUpForm from "@/features/auth/SignUpForm";
import SocialAuth from "@/features/auth/SocialAuth";

const SignUpPage = () => {
    return (
        <AuthWrapper>
            <SignUpForm />
            <SocialAuth />
        </AuthWrapper>
    );
};

export default SignUpPage;
