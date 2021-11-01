import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import CollapseButton from '../buttonCollapse'

const styles = {
  backgroundColor: 'black',
  display: 'flex',
  justifyContent: 'space-between'
}


export default function Header ({label, whereTo, where}) {
  const displayDesktop = (label, whereTo, where) => {
    return <Toolbar  style={styles}>{where}<CollapseButton label={label} where={whereTo} style={{ backgroundColor: 'black' }} /></Toolbar>;
  };
  return (
    <AppBar>{displayDesktop(label, whereTo, where)}</AppBar>
  );
}