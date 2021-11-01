import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import CollapseButton from '../buttonCollapse'

const styles = {backgroundColor: 'black',
                display: 'flex', 
                justifyContent: 'space-between'}

export default function Header() {
  const displayDesktop = () => {
    return <Toolbar style={styles}>HOME <CollapseButton style={{backgroundColor:'black'}}/></Toolbar>;
  };
  
  return (
    <AppBar>{displayDesktop()}</AppBar>
  );
}