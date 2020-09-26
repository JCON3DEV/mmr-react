import React, { useState } from 'react';
import {Button, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import BasicTable from "./table";
import BottomNav from "./bottom-navigation";


export default function homepage() {
  return (
    <Box>
      <Button variant="outlined" color="secondary">
        Hello World
      </Button>
      <Typography variant="h1" component="h2">
        h1. Heading
      </Typography>
      <BasicTable />
      <BottomNav />
    </Box>
  );
}