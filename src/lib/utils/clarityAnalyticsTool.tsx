import Clarity from "@microsoft/clarity";
const clarityProjectId = import.meta.env.VITE_CLARITY_ID || "retx2tyaqx";

const clarityTool = Clarity.init(clarityProjectId);

export default clarityTool;
