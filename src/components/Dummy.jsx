function getAlert() {
  alert("Hey this is a dummy alert message")
}

function Dummy() {
  return (
    <div>
      <p>I am a dummy component living inside the components folder!</p>
      <button onClick={getAlert}>Click Me</button>
    </div>
  );
}

export default Dummy;