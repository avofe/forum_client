import { Navigate } from "react-router-dom";
import { JSX, useEffect, useState } from "react";
import { useAppSelector } from "../hooks/useAppSelector";
import { showLoading, hideLoading } from "@/UI/Loader/loaderSlice";
import { useAppDispatch } from "../hooks/useAppDispatch";

// ProtectedRoute — только для авторизованных
export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { token, loading, initialized } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    dispatch(showLoading("Проверка авторизации..."));

    if (initialized && !loading) {
      dispatch(hideLoading());
      setChecked(true);
    }
  }, [dispatch, initialized, loading]);

  if (!checked) return null;

  if (!token) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;
