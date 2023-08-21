import { responsiveFontSizes, ThemeProvider, CssBaseline } from "@mui/material";

// Theme import
import { theme } from "./styles/theme/default";

import { ExerciseLessonProvider } from "./hooks/useExerciseLesson";
import { AuthProvider } from "./hooks/useAuth";

// Routes import
import { AppRoutes } from "./routes";

export function App() {
  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline>
        <AuthProvider>
          <ExerciseLessonProvider>
            <AppRoutes />
          </ExerciseLessonProvider>
        </AuthProvider>
      </CssBaseline>
    </ThemeProvider>
  );
}
