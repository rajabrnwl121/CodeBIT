import React, { useState } from "react";

const CreateHackathon = () => {
    const [formData, setFormData] = useState({
        hackathonName: "",
        teamSize: "",
        registrationTimeline: { start: "", end: "" },
        hackathonTimeline: { start: "", end: "" },
        allowVideoLink: false,
        allowLiveDeploymentLink: false,
        themes: [{ title: "", description: "" }],
    });

    const handleInputChange = (path, value) => {
        const pathArray = path.split(".");
        setFormData((prev) => {
            let updatedData = { ...prev };
            let temp = updatedData;
            for (let i = 0; i < pathArray.length - 1; i++) {
                temp = temp[pathArray[i]];
            }
            temp[pathArray[pathArray.length - 1]] = value;
            return updatedData;
        });
    };

    const handleAddTheme = () => {
        setFormData((prev) => ({
            ...prev,
            themes: [...prev.themes, { title: "", description: "" }],
        }));
    };

    const handleRemoveTheme = (index) => {
        const updatedThemes = formData.themes.filter((_, idx) => idx !== index);
        setFormData((prev) => ({
            ...prev,
            themes: updatedThemes,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Hackathon Created: ", formData);
        alert("Hackathon details submitted successfully!");
    };

    return (
        <div className="min-h-screen bg-[#181C21] text-slate-300">
            <div className="max-w-4xl mx-auto p-6">
                <h2 className="text-5xl font-semibold mb-8 tracking-wider text-[#0DB276]">
                    Create Hackathon
                </h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Hackathon Name */}
                    <div>
                        <label className="block text-xl font-medium mb-2">
                            Hackathon Name:
                        </label>
                        <input
                            type="text"
                            value={formData.hackathonName}
                            onChange={(e) =>
                                handleInputChange("hackathonName", e.target.value)
                            }
                            required
                            className="w-full p-3 rounded bg-[#212830] border border-transparent placeholder-slate-500 focus:border-[#0DB276] focus:outline-none"
                        />
                    </div>

                    {/* Team Size */}
                    <div>
                        <label className="block text-xl font-medium mb-2">
                            Team Size:
                        </label>
                        <input
                            type="number"
                            value={formData.teamSize}
                            onChange={(e) =>
                                handleInputChange("teamSize", e.target.value)
                            }
                            required
                            className="w-full p-3 rounded bg-[#212830] border border-transparent placeholder-slate-500 focus:border-[#0DB276] focus:outline-none"
                        />
                    </div>

                    {/* Registration Timeline */}
                    <div>
                        <label className="block text-xl font-medium mb-2">
                            Registration Timeline:
                        </label>
                        <div className="flex space-x-4">
                            <input
                                type="datetime-local"
                                value={formData.registrationTimeline.start}
                                onChange={(e) =>
                                    handleInputChange("registrationTimeline.start", e.target.value)
                                }
                                required
                                className="w-1/2 p-3 rounded bg-[#212830] border border-transparent placeholder-slate-500 focus:border-[#0DB276] focus:outline-none"
                            />
                            <input
                                type="datetime-local"
                                value={formData.registrationTimeline.end}
                                onChange={(e) =>
                                    handleInputChange("registrationTimeline.end", e.target.value)
                                }
                                required
                                className="w-1/2 p-3 rounded bg-[#212830] border border-transparent placeholder-slate-500 focus:border-[#0DB276] focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Hackathon Timeline */}
                    <div>
                        <label className="block text-xl font-medium mb-2">
                            Hackathon Timeline:
                        </label>
                        <div className="flex space-x-4">
                            <input
                                type="datetime-local"
                                value={formData.hackathonTimeline.start}
                                onChange={(e) =>
                                    handleInputChange("hackathonTimeline.start", e.target.value)
                                }
                                required
                                className="w-1/2 p-3 rounded bg-[#212830] border border-transparent placeholder-slate-500 focus:border-[#0DB276] focus:outline-none"
                            />
                            <input
                                type="datetime-local"
                                value={formData.hackathonTimeline.end}
                                onChange={(e) =>
                                    handleInputChange("hackathonTimeline.end", e.target.value)
                                }
                                required
                                className="w-1/2 p-3 rounded bg-[#212830] border border-transparent placeholder-slate-500 focus:border-[#0DB276] focus:outline-none"
                            />
                        </div>
                    </div>




                    {/* Themes Section */}
                    <div>
                        <label className="block text-xl font-medium mb-2">
                            Hackathon Themes:
                        </label>
                        {formData.themes.map((theme, index) => (
                            <div key={index} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Theme Title:
                                    </label>
                                    <input
                                        type="text"
                                        value={theme.title}
                                        onChange={(e) =>
                                            handleInputChange(`themes.${index}.title`, e.target.value)
                                        }
                                        required
                                        className="w-full p-3 rounded bg-[#212830] border border-transparent placeholder-slate-500 focus:border-[#0DB276] focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Theme Description:
                                    </label>
                                    <textarea
                                        value={theme.description}
                                        onChange={(e) =>
                                            handleInputChange(`themes.${index}.description`, e.target.value)
                                        }
                                        required
                                        className="w-full p-3 rounded bg-[#212830] border border-transparent placeholder-slate-500 focus:border-[#0DB276] focus:outline-none"
                                        rows="4"
                                    />
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleRemoveTheme(index)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    Remove Theme
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={handleAddTheme}
                            className="text-[#0DB276] hover:text-green-600"
                        >
                            Add Another Theme
                        </button>
                    </div>

                    {/* Allow Additional Links */}
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Allow users to provide:
                        </label>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={formData.allowVideoLink}
                                    onChange={(e) =>
                                        handleInputChange("allowVideoLink", e.target.checked)
                                    }
                                    className="w-4 h-4 text-[#0DB276] border-gray-300 rounded focus:ring-[#0DB276]"
                                />
                                <label className="ml-2 text-sm">Video Link</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={formData.allowLiveDeploymentLink}
                                    onChange={(e) =>
                                        handleInputChange("allowLiveDeploymentLink", e.target.checked)
                                    }
                                    className="w-4 h-4 text-[#0DB276] border-gray-300 rounded focus:ring-[#0DB276]"
                                />
                                <label className="ml-2 text-sm">Live Deployment Link</label>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-[#0DB276] hover:bg-[#0aa46c] text-white font-semibold tracking-wide rounded transition delay-100"
                    >
                        Create Hackathon
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateHackathon;