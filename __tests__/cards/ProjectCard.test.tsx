import React from "react";
import { render, screen } from "@testing-library/react";
import { ProjectCard } from "../../src/components/cards/ProjectCard";

describe("ProjectCard", () => {
  it("button is an anchor element that redirects to the 'proyectos/{projectId}' URL", async () => {
    const projectId = "1234-5432";
    render(
      <ProjectCard
        businessModel="Renting"
        currentAmount={150000}
        profitability="15"
        projectId={projectId}
        region="Baleares"
        street="C/ Bartolome del poble"
        totalProjectAmount={900000}
        src={""}
        status="active"
      />
    );

    const projectLinkButton = await screen.findByRole("link");
    const hrefAttribute = projectLinkButton.getAttribute("href");
    
    expect(hrefAttribute).toMatch(`/proyectos/${projectId}`);
  });
});
