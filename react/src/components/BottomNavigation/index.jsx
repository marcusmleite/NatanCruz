import { useEffect, useState } from "react";
import { TrendUp, Storefront, Trophy } from "phosphor-react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  BottomNavigation as MUIBottomNavigation,
  BottomNavigationAction,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export function BottomNavigation() {
  // Hooks
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  // List of paths where the BottomNavigation should NOT be displayed
  const excludedPaths = ["/", "/signup", "/choose-level"];

  //  States
  const [value, setValue] = useState(0);

  const items = [
    {
      label: "Aprender",
      icon: <TrendUp size={30} weight={value === 0 ? "bold" : "regular"} />,
      onNavigate: () => navigate("/dashboard"),
    },
    {
      label: "Loja",
      icon: <Storefront size={30} weight={value === 1 ? "bold" : "regular"} />,
      onNavigate: () => navigate("/ipo-store"),
    },
    {
      label: "Ranking",
      icon: <Trophy size={30} weight={value === 2 ? "bold" : "regular"} />,
      onNavigate: () => navigate("/ranking"),
    },
  ];

  useEffect(() => {
    return () => {
      setValue(0);
    };
  }, [isMobile]);

  /* Display BottomNavigation on all paths except the excluded ones */
  if (isMobile && !excludedPaths.some((path) => path === location.pathname)) {
    return (
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "0.5rem 0",
        }}
        elevation={5}
      >
        <MUIBottomNavigation
          showLabels
          value={value}
          onChange={(_, newValue) => setValue(newValue)}
        >
          {items.map((item) => (
            <BottomNavigationAction
              key={item.label}
              label={item.label}
              icon={item.icon}
              onClick={() => item.onNavigate()}
            />
          ))}
        </MUIBottomNavigation>
      </Paper>
    );
  }

  return null;
}
