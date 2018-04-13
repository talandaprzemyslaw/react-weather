import React from "react";

class Titles extends React.Component {
  render() {
    return (
      <div>
        <h1>Sprawdź Pogode</h1>
      <h2>Podaj nazwę miasta i państwa</h2>
    <h3 className="small">* Miasta wpisuj z dużej litery. Jeżeli sprawdzasz miasta z poza Polski używaj angielskich nazw. Nazwę Państwa podawaj za pomocą dwóch liter np:PL, UK </h3>
    </div>
    );
  }
}

export default Titles;
