
function Darkmode(){
    function handleClick(e){
      console.log(e)
    }

    return(
      <div>
          <button onClick={handleClick}>Darkmode</button>
      </div>
    )
}

export default Darkmode