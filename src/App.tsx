import FormFilter from "./components/formFilter/FormFilter";
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
      <FormFilter />
      <div>
        {countries?.map((country) => (
          <div key={country.name.common}>
            <h1> {country.name.common}</h1>
            <img src={`${country.flags.png}`} alt={`${country.flags.alt}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
