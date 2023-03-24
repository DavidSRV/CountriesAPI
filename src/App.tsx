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
      <FormFilter/>
      <ul>
        {countries?.map((country) => (
            <div key={country.name.common}>
              ¥¥
              <li>{country.name.common}</li>
              <li>
                <img
                  src={`${country.flags.png}`}
                  alt={`${country.flags.alt}`}
                />
              </li>
            </div>
          ))}
      </ul>
    </div>
  );
}

export default App;
