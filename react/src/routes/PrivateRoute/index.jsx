import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export function PrivateRoute({ children }) {
  // Hooks
  const location = useLocation();

  const token = localStorage.getItem("@STOCK-WAVE/token");

  if (!token) {
    toast.error("Realize login para prosseguir.", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
}
