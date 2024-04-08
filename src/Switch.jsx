export default function Switch({ setIsMetric, isMetric}) {
  return (
    <>
      <label className="switch">
        <input type="checkbox" className="switch" onClick={((e) => {setIsMetric(!isMetric)})} />
        <span className="slider round"></span>
      </label>
    </>
  )
}