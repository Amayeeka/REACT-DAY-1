// CurrentYear.jsx — Exercise 4: JSX & Declarative UI

function CurrentYear() {
  const year = new Date().getFullYear();   // 👈 JavaScript inside JSX using {}

  return <p>The current year is: {year}</p>;
}

export default CurrentYear;