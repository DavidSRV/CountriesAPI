import { useSelector } from "react-redux";
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

  const stateFlags = useSelector((state) => state.flags)


  return (
    <div className="App">
      <NavBar />
      <FormFilter />
      <div>
        {stateFlags.map((country: any) => (
          <div key={country.name.common}>
            <h1>{country.name.common}</h1>
          </div>
        ))}
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
