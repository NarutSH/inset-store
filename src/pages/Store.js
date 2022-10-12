import { Container, Grid } from "@mui/material";
import React from "react";
import ProductCard from "../components/ProductCard";

const Store = () => {
  return (
    <Container>
      <Grid container marginTop={3}>
        <Grid item xs={4}>
          <ProductCard
            title="Car RT12"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            imgPath="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
        </Grid>
        <Grid item xs={4}>
          <ProductCard
            title="GT22"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            imgPath="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
        </Grid>
        <Grid item xs={4}>
          <ProductCard
            title="GT22"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            imgPath="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Store;
