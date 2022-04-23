import axios from "axios";
// import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



// function Data({title}) {
//   return (
//     <li>{title}</li>
//   );
// }

// function DataList() {
//   const url = 'https://jsonplaceholder.typicode.com/posts'

//   const [data, setData] = useState(null);

//   useEffect(() => {
//     axios.get(url).then((response) => {
//       setData(response.data);
//     });
//   }, []);

//   if (!data) return '無いよ';

//   return(
//     <ul>
//       {data.map(d =>{
//         return (
//           <div key={d.id}>
//             <Data title={d.title} />
//           </div>
//         );
//       })}
//     </ul>
//   );
// }


function RootPage() {
  const path = '/sample_api/hello'
  const url = `${process.env.REACT_APP_API_ORIGIN}${path}`;

  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, []);

  if (!data) return 'loading...';

  return (
    <>
      <h1>Root Page</h1>
      <p>{data.data}</p>
    </>
  );
}

export default RootPage;