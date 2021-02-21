import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

import classnames from "classnames";

export default function NavigationBlock({ activeTab }) {
  return (
    <Nav tabs>
      <NavItem>
        <NavLink className={classnames({ active: activeTab === "1" })}>
          Step 1
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={classnames({ active: activeTab === "2" })}>
          Step 2
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={classnames({ active: activeTab === "3" })}>
          Step 3
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={classnames({ active: activeTab === "4" })}>
          Step 4
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={classnames({ active: activeTab === "5" })}>
          Success
        </NavLink>
      </NavItem>
    </Nav>
  );
}
