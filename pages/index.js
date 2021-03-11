import Head from "next/head";
import Footer from "@components/Footer";
import data from "./data/data";
import Tour from "./comp/tour";
import { useEffect, useState } from "react";
import Loading from "./comp/Loading";
const url = "https://course-api.com/react-tours-project";
export default function Home() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);
  const removeList = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <Head>
          <title>Tours</title>
          <link rel="icon" href="/travel_management.ico" />
        </Head>

        <main>
          <Loading />
        </main>

        <Footer />
      </div>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <h2>Tour</h2>
        <h2> No More Tour In This List</h2>
        <button onClick={fetchTours}>Refresh</button>
      </main>
    );
  }
  return (
    <main>
      <Tour tours={tours} removeList={removeList} />
    </main>
  );
}
