// import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const Success = () => {
  const location = useLocation();
  console.log(location);

  return <div>Successfully</div>;
};

export default Success;
