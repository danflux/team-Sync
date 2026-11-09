import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginEmployee, registerEmployee } from "../state/auth/authActions";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onRegisterSubmit = async (data) => {
    const payload = {
      name: data.name || data.fullname,
      email: data.email,
      password: data.password,
    };
    const result = await dispatch(registerEmployee(payload));
    if (registerEmployee.fulfilled.match(result)) {
      navigate("/home");
    }
  };
  const onLoginSubmit = (data) => {
    dispatch(loginEmployee(data));
  };

  return {
    register,
    handleSubmit,
    errors,
    onRegisterSubmit,
    onLoginSubmit,
    navigate,
  };
};
