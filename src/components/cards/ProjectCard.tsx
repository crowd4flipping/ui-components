import React, { ReactElement } from "react";
import { ProjectCardLayout } from "./items/ProjectCardLayout";
import { LinkButton } from "../buttons";
import { ImageWrapperDescription } from "../image/ImageWrapperDescription";
import { ProjectTag } from "./ProjectTag";
import { C4FComponentError } from "../../errors/C4FComponentError";
import { ProjectFinancialData } from "./items/ProjectFinancialData";

type ProjectStatus = Parameters<typeof ProjectTag>[number]["status"];

type Props = {
  src: string | ReactElement;
  isDark?: boolean;
  href: string;
  status: ProjectStatus;
  businessModel: string;
  currentAmount: number;
  totalProjectAmount: number;
  profitability: string;
};

export const ProjectCard = (props: Props) => {
  const {
    src,
    isDark,
    href,
    status,
    businessModel,
    currentAmount,
    totalProjectAmount,
    profitability,
  } = props;

  const businessModelMode = isDark && "project-card__business-model--dark";

  return (
    <ProjectCardLayout
      isDark={isDark}
      leftSide={
        <>
          <div className="project-card__header">
            <ProjectTag isDarkMode={isDark} status={status} />
            <h4 className={`project-card__business-model ${businessModelMode}`}>
              {businessModel}
            </h4>
          </div>
          <ProjectFinancialData
            currentAmount={currentAmount}
            profitability={profitability}
            totalProjectAmount={totalProjectAmount}
            isDarkMode={isDark}
            status={status}
          />
        </>
      }
      rightSide={
        <>
          <div className="project-card__image">
            <ImageWrapperDescription
              title="Baleares, Mallorca"
              subtitle="C/ Santiago el hermoso"
            >
              {isReactImageElement(src) ? (
                src
              ) : (
                <img
                  width={272}
                  height={227}
                  loading="lazy"
                  alt="imagen del proyecto"
                  src={src}
                />
              )}
            </ImageWrapperDescription>
          </div>
          <LinkButton size="sm" fullWidth variant="secondary" href={href}>
            Ver proyecto
          </LinkButton>
        </>
      }
    />
  );

  function isReactImageElement(value: unknown): value is ReactElement {
    if (!isReactElement(value)) return false;
    if (value.type === "img") return true;
    throw new C4FComponentError(
      "Property 'src' in component ProjectCard is not an <img> jsx element"
    );
  }

  function isReactElement(value: unknown): value is ReactElement {
    const obj = Object.keys(value as object);
    const type = obj.find((prop) => prop == "type");
    if (!type) return false;
    return true;
  }
};
