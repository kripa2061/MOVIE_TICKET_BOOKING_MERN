import { useEffect } from "react";
import { useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const SSOCallback = () => {
  const { handleRedirectCallback } = useClerk();
  const navigate = useNavigate();

  useEffect(() => {
    const completeSignIn = async () => {
      try {
        await handleRedirectCallback();
        navigate("/"); // Redirect to home after successful login
      } catch (err) {
        console.error("SSO redirect failed:", err);
        navigate("/login"); // Redirect to login if error occurs
      }
    };

    completeSignIn();
  }, [handleRedirectCallback, navigate]);

  return <p>Completing sign in...</p>;
};

export default SSOCallback;
