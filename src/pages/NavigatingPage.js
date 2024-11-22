import ContestHackathon from "./ContestHackathon";
import ProjectSubmission from "./ProjectSubmission";
import FormHackathon from './FormHackathon';
import CreateHackathon from './CreateHackathon';
import CreateContest from './CreateContest';
import CreateChallenge from "./CreateChallenge";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function NavigatingPage() {
    return (
        <div className="Navigating">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/projectsubmit" element={<ProjectSubmission />} />
                <Route path="/teamregister" element={<FormHackathon />} />
                <Route path="/createhackathon" element={<CreateHackathon />} />
                <Route path="/createcontest" element={<CreateContest />} />
                <Route path="/createchallenge" element={<CreateChallenge />} />
                {/*<ContestHackathon userCred="admin" feat="hackathon" />
            <ContestHackathon userCred="admin" feat="contest" />
            <ContestHackathon userCred="student" feat="hackathon" />
             <ContestHackathon userCred="student" feat="contest" /> */}
                <Route path="/:userCred/:feat" element={<ContestHackathon />}
                />
            </Routes>
        </div>
    );
};

export default NavigatingPage;