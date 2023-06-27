import React from "react";
import { LinkButton } from "../../src/components/buttons/LinkButton";
import { render, screen } from "@testing-library/react";
import { fireEvent } from "@storybook/testing-library";

describe("LinkButton", () => {
  it("Containst a href and rel 'noopener'", async () => {
    const redirectionURL = "/some-place";

    render(
      <LinkButton variant="primary" href={redirectionURL}>
        My Link Button
      </LinkButton>
    );

    const linkButton = await screen.findByText("My Link Button");
    const hrefAttribute = linkButton.getAttribute("href");
    const relAttribute = linkButton.getAttribute("rel");

    expect(hrefAttribute).toMatch(redirectionURL);
    expect(relAttribute).toMatch("noopener");
  });
});
