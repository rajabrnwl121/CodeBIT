const Login = () => {
    return (
        <div className="flex items-center justify-center w-full min-h-screen text-white bg-[#181C21]">
            {/* Login Form */}
            <div className="p-6 rounded-lg max-w-md  w-[30rem]  bg-[#1F252B] shadow-lg">
                <h2 className="text-4xl font-semibold mb-6 tracking-wider">Log In</h2>

                {/* Tabs */}
                <div className="flex space-x-6 mb-8 mt-[40px] font-semibold text-[18px]">
                    <button className="border-b-[4px] border-[#0DB276] text-[#0DB276] pb-1">Student</button>
                    <button className="text-gray-400 hover:text-[#0DB276] hover:border-b-[4px] hover:border-[#0DB276] pb-1 transition duration-200">Admin</button>
                </div>

                {/* Form */}
                <form className="space-y-8">
                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-400">Email</label>
                        <input
                            type="email"
                            placeholder="Enter email address"
                            className="w-full mt-1 p-3 rounded bg-[#212830] border border-transparent text-white placeholder-[#393530] focus:border-[#0DB276] focus:outline-none"
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-400">Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="w-full mt-1 p-3 rounded bg-[#212830] border border-transparent text-[#393530] placeholder-[#393530] focus:border-[#0DB276] focus:outline-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#0DB276] hover:bg-[#0aa46c] text-white py-3 rounded mt-4 font-semibold tracking-wide"
                    >
                        Log In
                    </button>
                </form>

                {/* Alternative Login Options */}
                <div className="mt-6 flex items-center">
                    <div className="w-full"><hr className="border border-[#293139]" /></div>
                    <div className="text-center text-sm font-medium tracking-wide text-gray-400 w-full">Or sign up with</div>
                    <div className="w-full"><hr className="border border-[#293139]" /></div>
                </div>

                {/* Sign Up Link */}
                <a
                    href="/signup"
                    className="block text-center text-[#0DB276] mt-6 font-semibold tracking-wide border border-[#293139] hover:bg-[#21272e] py-3"
                >
                    Sign Up
                </a>
            </div>
        </div>
    );
};

export default Login;