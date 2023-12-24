import './App.css';
import Banner from './Banner';
import Nav from './Nav';
import Raw from './Raw';
import requests from './request';
function App() {
  return (
    <div className="App">
      <Nav />
       <Banner />
       <Raw title="NETFLIX ORIGINALS" isLargeRaw fetchUrl={requests.fetchNetflixOriginals} />
			<Raw title="Trending" fetchUrl={requests.fetchTrending} />
			<Raw title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Raw title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Raw title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Raw title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Raw title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Raw title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
  
    </div>
  );
}

export default App;
