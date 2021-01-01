import "./App.css";
import Row from "./Row";
import request from "./request";
import Banner from "./Banner"
import Nav from "./Nav"

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner />
      <Row
        title="NEFLIX ORIGINAL"
        fetchUrl={request.fetchTrending}
        isLargeRow
      />
      <Row title="Trending now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRted} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
