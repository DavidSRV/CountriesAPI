import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./formFilter.scss";

const FormFilter = () => {
  return (
    <form action="#">
      <div className="form__containerFilterCountry">
        <SearchIcon className="form__icon" />
        <input
          className="form__inputText"
          type="text"
          placeholder="Search for a country..."
        />
      </div>
      <div className="form__containerFilterRegion">
        <div className="form__labelIcon">
          <label htmlFor="region">Filter by Region</label>
        </div>
        <select name="region">
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </form>
  );
};

export default FormFilter;
