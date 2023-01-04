import { useEffect, useState } from "react";

const useParts = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    fetch("https://auto-parts-server-zeta.vercel.app/parts")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);

  return [parts, setParts];
};

export default useParts;
