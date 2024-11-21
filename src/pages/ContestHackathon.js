import ContestHackathonEvents from "../components/ContestHackathonEvents";
import AddEvents from "../components/AddEvents";

const ContestHackathon = ({ userCred, feat }) => {
    return (
        <div className="flex flex-wrap flex-col items-center justify-center bg-[#181C21] px-4 py-10 ">
            <div className="flex flex-wrap flex-col gap-16 items-start bg-[#181C21] text-white w-[1200px] rounded-2xl box-border">
                <div className="flex items-center justify-between w-[1200px]">
                    <ContestHackathonEvents UP="upcoming" feat={feat} />
                    {userCred === "admin" ? <AddEvents feat={feat} /> : null}
                </div>
                <ContestHackathonEvents UP="past" feat={feat} />
            </div>

        </div >
    );
};
export default ContestHackathon;
