import React from "react";

class Navbar extends React.Component {
  render() {
    const { player1, player2, userName1, userName2 } = this.props;
    return (
      <div className="navbar">
     
        <div className="statistics">
          {/* <div className="one">
          <h2>
            {userName1}
           
          </h2>
          <h4> {player1} </h4>
          </div>
          <div className="two">
          <h2>
            {userName2}
           
          </h2>
          <h4> {player2} </h4>
          </div> */}
          <table style={{ width: "50%" , border:"2px solid black" , textAlign:'center'}}>
  <tr style={{  border:"2px  solid black" , textAlign:'center' }}>
    <th style={{  border:"2px  solid black" , textAlign:'center' }}> {userName1}</th>
    <th > {userName2}</th> 
 
  </tr>
  <tr>
    <td style={{  border:"2px  solid black" , textAlign:'center'}}>{player1} </td>
    <td>{player2} </td>
  
  </tr>


</table>
        </div>
      </div>
    );
  }
}

export default Navbar;
