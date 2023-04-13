import { useSelector } from "react-redux";
import FormFilter from "./components/formFilter/FormFilter";
import NavBar from "./components/navbar/NavBar";
import { ApiCountry, useFetch } from "./hooks/useFetch";
import "./sass/resets.scss";

interface AppState {
  flags: ApiCountry[];
}

function App() {
  const [countries, isLoading, error] = useFetch(
    "https://restcountries.com/v3.1/all"
  );

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  // const stateFlags = useSelector((state:AppState) => state.flags)


  return (
    <div className="App">
      <NavBar />
      <FormFilter />
      <div>
        {/* {stateFlags.map((country:ApiCountry) => (
          <div key={country.name.common}>
            <h1>{country.name.common}</h1>
          </div>
        ))} */}
        {/* {countries?.map((country) => (
          <div key={country.name.common}>
            <h1> {country.name.common}</h1>
            <img src={`${country.flags.png}`} alt={`${country.flags.alt}`} />
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default App;
