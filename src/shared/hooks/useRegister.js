import { useState } from "react";
import { register as registerRequest } from "../../services/api.js";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const extractErrorMessage = (e) => {
  const data = e?.response?.data;
  if (!data) return null;
  if (typeof data === "string" && data.trim()) return data;
  if (data.msg) return data.msg;
  if (data.message) return data.message;
  if (Array.isArray(data.errors) && data.errors.length > 0) {
    return data.errors[0].msg || data.errors[0].message;
  }
  return null;
};

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const registerUser = async (data) => {
    setIsLoading(true);

    const response = await registerRequest(data);
    setIsLoading(false);
    if (response.error) {
      toast.error(
        extractErrorMessage(response.e) ||
        "Ocurrió un error durante el registro.",
        {
          duration: 3000,
        }
      );
      return;
    }

    toast.success("Registro exitoso", {
      description: "¡Te has registrado correctamente!",
      duration: 3000,
    });
    navigate("/login");
  };

  return {
    registerUser,
    isLoading,
  };
};