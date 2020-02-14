import React from "react";
import List from "./List";
import Form from "./Form";
const AppRedux = () => (
  <>
  <div>
      <h2>Add a new article</h2>
      <Form />
    </div>

    
    <div>
      <h2>Articles</h2>
      <List />
    </div>
    
  </>
);
export default AppRedux;