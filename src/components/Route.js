import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  // Ovaj state je samo da bi se Route Updateovao
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // Slusamo promenu URL
    window.addEventListener("popstate", onLocationChange);

    //Clean Up
    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
