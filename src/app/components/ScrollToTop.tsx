import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
  top: 0,
  left: 0,
  behavior: "instant" // Use 'smooth' if you want it to slide up, though 'instant' is usually better for UX
});
  }, [pathname]); 

  return null; 
}