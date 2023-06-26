import React from "react";
import { Button } from "../../src/components/buttons/Button";
import { screen, render } from "@testing-library/react";
import { fireEvent } from "@storybook/testing-library";

describe("Button", () => {

  it("OnClick button works", async () => {
    const onClick = jest.fn();

    render(
      <Button variant="primary" onClick={onClick}>
        My primary button
      </Button>
    );

    const button = await screen.findByRole("button");
    fireEvent.click(button)
    
    expect(onClick).toBeCalled();
  });
});
