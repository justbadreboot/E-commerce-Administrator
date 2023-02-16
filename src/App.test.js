import { render,screen } from "@testing-library/react";
import Contact from "./components/screens/Contact";
import Navbar from "./components/shared/Navbar/Navbar";
import { Router } from "react-router-dom";
describe("Test Suit Med",()=>{
  it("Render information",()=>{
    <Router>
    const component=render(<Navbar/>);
    </Router>
  });
});
describe("Test Suit Med",()=>{
  it("Render information",()=>{
    const component=render(<Contact/>);
  });
});

describe("Test Suit Med",()=>{
  it("Render information",()=>{
    const component=render(<Contact/>);
    component.getByText("Lorem lorem lorem lorem lorem lorem lroe loremrrrrrrrm")
  });
});
