const Login = () => {
    return (
        <div className="flex items-center w-full h-[91vh] text-white bg-1">
            {/* Signup Form */}
            <div className="p-8 rounded-lg w-[35rem] m-[22%]">
                <h2 className="text-4xl font-semibold mb-6 tracking-wider">Log In</h2>
                {/* Tabs */}
                <div className="flex space-x-6 mb-8 mt-[40px] font-semibold text-[18px]">
                    <button className="border-b-[4px] border-[#23d18b] text-[#23d18b] pb-1">Student</button>
                    <button className="text-gray-400">Admin</button>
                </div>

                {/* Form */}
                <form className="space-y-8">
                    <div>
                        <label className="block text-sm font-medium text-gray-400">Email</label>
                        <input type="email" placeholder="Enter email address" className="w-full mt-1 p-3 rounded bg-[#212830] border border-transparent text-white placeholder-[#393530] focus:border-[#0DB276] focus:outline-none" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400">Password</label>
                        <input type="password" placeholder="Enter password" className="w-full mt-1 p-3 rounded bg-[#212830] border border-transparent text-[#393530] placeholder-[#393530] focus:border-[#0DB276] focus:outline-none" />
                    </div>

                    <button className="w-full bg-[#23d18b] hover:bg-[#0DB276] text-white py-3 rounded mt-4 font-semibold tracking-wide">Log In</button>
                </form>

                {/* Alternative Login Options */}
                <div className='mt-6 flex items-center'>
                    <div className='w-full'><hr className='border border-[#293139]' /></div>
                    <div className="text-center text-sm font-medium tracking-wide text-gray-400 w-full">Or sign up with</div>
                    <div className='w-full'><hr className='border border-[#293139]' /></div>
                </div>

                {/* Sign Up Link */}
                <a href="/signup" className="block text-center text-[#23d18b] mt-6 font-semibold tracking-wide border border-[#293139] hover:bg-[#21272e] py-3">Sign Up</a>
            </div>
        </div>
    );
};

export default Login;