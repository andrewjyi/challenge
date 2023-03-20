import { useEffect } from "react";

const Loading = () => {
  useEffect(() => {
    console.log('here');
  })

  return <div className="center">Loading...</div>;
};

export { Loading };
