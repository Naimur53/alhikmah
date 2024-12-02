const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="grid h-screen w-full grid-cols-2 gap-[10%]">
            <div>{children}</div>

            <div className="center m-6 h-[95%] rounded-lg bg-primary text-2xl font-bold text-white">
                ai khane design kore nice slider add kore dio
            </div>
        </div>
    );
};

export default AuthWrapper;
