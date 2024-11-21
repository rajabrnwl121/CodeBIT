
import ContestHackathonElement from "./ContestHackathonElement";
const ContestHackathonTable = ({ UP, feat }) => {
    const HackeleUp = [{
        id: "03",
        title: "November Fest",
        regDate: Date.now(),
        enterDate: Date.now(),
    },
    {
        id: "04",
        title: "December Fest",
        regDate: 25 / 10 / 2024,
        enterDate: 30 / 10 / 2024,
    },];
    const HackelePast = [
        {
            id: "01",
            title: "September Fest",
            regDate: 10 / 10 / 2024,
            enterDate: 15 / 10 / 2024,
        },
        {
            id: "02",
            title: "October Fest",
            regDate: 15 / 10 / 2024,
            enterDate: 20 / 10 / 2024,
        },
    ];
    const ConteleUp = [{
        id: "03",
        title: "November Contest",
        regDate: 20 / 10 / 2024,
        enterDate: 24 / 10 / 2024,
    },
    {
        id: "03",
        title: "November Contest",
        regDate: 20 / 10 / 2024,
        enterDate: 24 / 10 / 2024,
    }];
    const ContelePast = [
        {
            id: "01",
            title: "September Contest",
            regDate: 10 / 10 / 2024,
            enterDate: 15 / 10 / 2024,
        },
        {
            id: "02",
            title: "October Contest",
            regDate: 15 / 10 / 2024,
            enterDate: 20 / 10 / 2024,
        },
    ];
    let up, past;
    if (feat === "hackathon") {
        up = HackeleUp;
        past = HackelePast;
    } else {
        up = ConteleUp;
        past = ContelePast;
    }
    return (
        UP === "upcoming" ? (
            up.map(({ id, title, regDate, enterDate }) => {
                return (

                    <div className="flex flex-wrap flex-col  py-4  rounded-lg p-4 w-[750px]">
                        <ContestHackathonElement compId={id} title={title} regDate={regDate} enterDate={enterDate} />
                    </div>);
            })

        ) : (
            past.map(({ id, title, regDate, enterDate }) => {
                return (

                    <div className="flex flex-wrap flex-col py-4 rounded-lg p-4 w-[750px]">
                        <ContestHackathonElement compId={id} title={title} regDate={regDate} enterDate={enterDate} />
                    </div>);
            })
        )
    );
};

export default ContestHackathonTable;