import React from "react";

const Home = ({ locale, data }) => {
  return (
    <section>
      <h2>Home</h2>
      {data ? (
        <div>
          <p>Data from backend: {data.message}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default Home;