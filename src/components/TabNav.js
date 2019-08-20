import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
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
    <div class="tab-menu">
      <NavLink exact activeClassName="active" to={"/"}>
        <a class="tabpage">Home</a>
      </NavLink>
      <NavLink exact activeClassName="active" to={"/characters/"}>
        <a class="tabpage">Characters</a>
      </NavLink>
      <NavLink exact activeClassName="active" to={"/locations/"}>
        <a class="tabpage">Locations</a>
      </NavLink>
      <NavLink exact activeClassName="active" to={"/episodes/"}>
        <a class="tabpage">Episodes</a>
      </NavLink>
    </div>
  );
}
