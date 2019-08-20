import React from "react";
// import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
// import styled from "styled-components";

// const tabBox = styled.div`
//   margin: 5px 5px 5px 5px;
//   padding: 5px 5px 5px 5px;
//   width: 200px;
//   text-align: center;
//   border: 2px solid yellow;
//   `;

// // TODO: Add missing tabs below
export default function TabNav() {
return (
    <div className="tabbox">
      <NavLink exact to="/" className="tabstop">Home</NavLink>
     <NavLink to="/characters/" className="tabstop">
         Characters
       </NavLink>
       <NavLink to="/locations/" className="tabstop">
         Locations
       </NavLink>
       <NavLink to="/episodes/" className="tabstop">
         Episodes
       </NavLink>
    </div>
   );
}
   