import Tour from "./components/Tour";
import data from "./components/data";
import Header from "./components/Header";

function App() {
  const tourelements = data.map(function (items) {
    return (
      <Tour
        image={items.coverImg}
        location={items.location}
        title={items.title}
        startdate={items.stats.rating}
        enddate={items.stats.reviewcount}
        desc={items.desc}
      />
    );
  });

  return (
    <div>
      <Header />
      {tourelements}
    </div>
  );
}

export default App;
