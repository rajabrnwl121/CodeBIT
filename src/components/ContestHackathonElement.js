const ContestHackathonElement = ({ compName, title, regDate, enterDate }) => {
    return (
        <div className="flex flex-wrap items-center justify-around text-[15px] py-4 border border-[#293139] bg-[#21272e] rounded-lg h-[150px]">
            <div>
                <div className={`${compName}-title text-[30px] text-green-500 font-bold`} >{title}</div>
                <div className={`${compName}-regDate`}>{regDate}</div>
                <div className={`${compName}-enterDate`}>{enterDate}</div>
            </div>
            <div className="flex flex-col flex-wrap gap-3">
                <div className={`${compName}-register w-[120px] hover:bg-[#0a9160] hover:text-[#efefef]  hover:cursor-pointer transition delay-100  bg-[#0DB276] rounded-lg py-2 px-4 tracking-wider text-center font-Nomal`}>Register &rarr;</div>
                <div className={`${compName}-Enter w-[120px] hover:bg-[#0a9160] hover:text-[#efefef]  hover:cursor-pointer transition delay-100 bg-[#0DB276] rounded-lg py-1.5 px-4 tracking-wider text-center font-Nomal`}>Enter &rarr;</div>
            </div>
        </div >
    );
};
export default ContestHackathonElement;