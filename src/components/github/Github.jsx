import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {

    const data = useLoaderData()
//   const [data, setData] = useState({}); // Initialize as an empty object

//   useEffect(() => {
//     fetch("https://api.github.com/users/Peolunics")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       })
//       .catch((error) => console.error("Error fetching data:", error)); // Handle errors
//   }, []);

  return (
    <div className="text-center text-lg bg-gray-400 text-white p-4 ">
      GitHub followers: {data?.followers ?? "Loading..."}
      <img src={data.avatar_url} alt="picture" width={400} />
     </div>
  );
}

export default Github;


export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/Peolunics')
    return response.json()
}