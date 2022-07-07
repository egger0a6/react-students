const Score = (props) => {
  return (
    <div className="score-container">
      <p>
        <span style={{fontWeight:"bold", color:"#fb8500"}}>{props.score}</span> 
        &nbsp;({props.date})
      </p>
    </div>
  );
}

export default Score;