import ContestHackathon from "./ContestHackathon";
import ProjectSubmission from "./ProjectSubmission";
import FormHackathon from './FormHackathon';
import CreateHackathon from './CreateHackathon';
import CreateContest from './CreateContest';
import CreateChallenge from "./CreateChallenge";
function NavigatingPage() {
    return (
        <div className="Navigating">
            {/* <ProjectSubmission /> */}
            {/* <FormHackathon /> */}
            {/* <CreateHackathon /> */}
            {/* <CreateContest /> */}
            {/* <CreateChallenge/> */}
            <ContestHackathon userCred="admin" feat="hackathon" />
            {/* <ContestHackathon userCred="admin" feat="contest" />*/}
            {/* <ContestHackathon userCred="student" feat="hackathon" />*/}
            {/* <ContestHackathon userCred="student" feat="contest" /> */}
        </div>
    );
};

export default NavigatingPage;
