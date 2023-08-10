import { useEffect } from "react";

const Carbonbadge = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/website-carbon-badges@^1/b.min.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="wcb" className="wcb carbonbadge" />;
};

export default Carbonbadge;
