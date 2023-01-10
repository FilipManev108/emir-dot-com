import { useEffect, useState } from "react";
import client from "../sanity/client";

import Layout from "../components/UI/Layout";

export default function Home() {
  const [hp, setHp] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await client.fetch(`*[_type == 'author'] {
      name, title}[0]`);
      setHp(response);
    };
    fetchData();
  }, []);

  return <Layout mainMsg={hp.title} />;
}
