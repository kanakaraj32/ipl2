// Write your code here
const Data = props => {
  // eslint-disable-next-line
  const {detail} = props
  const {competingTeam, id} = detail
  return (
    <div>
      <h1>{competingTeam}</h1>
      <p>{id}</p>
    </div>
  )
}
export default Data
