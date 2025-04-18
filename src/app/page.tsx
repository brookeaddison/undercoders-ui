
import { Grid } from "@mui/material";
import Introduction from "../../components/Introduction";
import Navbar from "../../components/Navbar";
import ThreePillars from "../../components/PillarCard";
import ExperienceCard from "../../components/ExperienceCard";
import LandingPageHighlights from "../../components/LandingPageHighlights";
import SiteFooter from "../../components/SiteFooter";

export default function Home() {
  return (
    <>
      <Introduction />
      {/* What to Expect Section */}
      <LandingPageHighlights /> 
    </>
    
  );
}
