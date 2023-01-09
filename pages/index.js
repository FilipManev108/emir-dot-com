import { useEffect, useState } from "react";
import client from "../sanity/client";

export default function Home() {
  const [hp, setHp] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await client.fetch(`*[_type == 'author'] {
      name}[0]`);
      // const data = await response.json;
      setHp(response);
    };
    fetchData();
    // console.log(fetchData());
  }, []);

  return (
    <div>
      <h1>{hp.name}</h1>
    </div>
  );
}
