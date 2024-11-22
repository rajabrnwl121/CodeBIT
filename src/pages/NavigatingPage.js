import ContestHackathon from "./ContestHackathon";
import ProjectSubmission from "./ProjectSubmission";
import FormHackathon from './FormHackathon';
import CreateHackathon from './CreateHackathon';
import CreateContest from './CreateContest';
import CreateChallenge from "./CreateChallenge";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
function NavigatingPage() {
    return (
        <div className="Navigating">
            <Home />
            {/* <SignUp /> */}
            {/* <Login /> */}
            {/* <ProjectSubmission /> */}
            {/* <FormHackathon /> */}
            {/* <CreateHackathon /> */}
            {/* <CreateContest /> */}
            {/* <CreateChallenge/> */}
            {/* <ContestHackathon userCred="admin" feat="hackathon" /> */}
            {/* <ContestHackathon userCred="admin" feat="contest" />*/}
            {/* <ContestHackathon userCred="student" feat="hackathon" />*/}
            {/* <ContestHackathon userCred="student" feat="contest" /> */}
        </div>
    );
};

export default NavigatingPage;
