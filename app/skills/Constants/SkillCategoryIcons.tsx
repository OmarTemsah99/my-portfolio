import ApiIcon from "@mui/icons-material/Api";
import BugReportIcon from "@mui/icons-material/BugReport";
import CloudIcon from "@mui/icons-material/Cloud";
import LanguageIcon from "@mui/icons-material/Language";
import StorageIcon from "@mui/icons-material/Storage";
import WebIcon from "@mui/icons-material/Web";

export const getSkillCategoryIcon = (iconName: string) => {
  const iconMap = {
    LanguageIcon: <LanguageIcon sx={{ fontSize: "2rem" }} />,
    WebIcon: <WebIcon sx={{ fontSize: "2rem" }} />,
    ApiIcon: <ApiIcon sx={{ fontSize: "2rem" }} />,
    StorageIcon: <StorageIcon sx={{ fontSize: "2rem" }} />,
    CloudIcon: <CloudIcon sx={{ fontSize: "2rem" }} />,
    BugReportIcon: <BugReportIcon sx={{ fontSize: "2rem" }} />,
  };

  return (
    iconMap[iconName as keyof typeof iconMap] || (
      <LanguageIcon sx={{ fontSize: "2rem" }} />
    )
  );
};
