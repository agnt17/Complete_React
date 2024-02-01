import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const data = useLoaderData();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/agnt17")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black text-2xl m-10 flex flex-col items-center text-white">
      <img src={data.avatar_url} alt="Git picture" width={200} />
      Github followers:{data.followers}
    </div>
  );
}

export default Github;

// export const githubInfoLoader = async ()=>{
//   const response = await fetch("https://api.github.com/users/agnt17")
//   return response.json()
// }
