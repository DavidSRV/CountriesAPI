import NavBar from "./components/navbar/NavBar";
import { useFetch } from "./hooks/useFetch";
import "./sass/resets.scss";

function App() {
  const [countries, isLoading, error] = useFetch(
    "https://restcountries.com/v3.1/all"
  );

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="App">
      <NavBar />
      <ul>
        {countries &&
          countries.map((country) => (
            <div>
              <li key={country.name.common}>{country.name.common}</li>
              <li key={country.name.common}><img src={`${country.flags.png}`} alt="" /></li>
            </div>
          ))}
      </ul>
    </div>
  );
}

export default App;
