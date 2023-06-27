import React from "react";

export const ProjectInStudyInfo = ({
  fullWithDivider,
}: {
  fullWithDivider: boolean;
}) => {
  return (
    <div className="project-card-financial-data">
      {fullWithDivider && (
        <hr className={`project-card-financial-data__divider`} />
      )}
      <div className="project-card-financial-data__in-study-content">
        <p className={`fs--sm`}>
          Estamos analizando la viabilidad de este proyecto.
        </p>
        <p className={`fs--sm`}>
          Te enviaremos un correo electrónico cuando esté disponible para
          invertir.
        </p>
        <p className={`fs--sm`}>
          <b>Recuerda visitar la bandeja de spam.</b>
        </p>
      </div>
    </div>
  );
};
