export default function Input({ location, setLocation, setIsFetch }) {
  function handleRequest(e) {
    if (e.keyCode != 13 || location === e.target.value) {
      return;
    }
    console.log("turbo");
    setLocation(e.target.value);
    setIsFetch(true);
    e.target.value="";
  }

  return (
    <div className="input">
      <input type="text" id="input" onKeyDown={((e) => handleRequest(e))} >
      </input>
    </div>
  )
}