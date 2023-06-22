import React from "react";

export const ProjectInStudyInfo = ({
  isDark,
  withDivider,
}: {
  isDark: boolean;
  withDivider: boolean;
}) => {
  const dividerColor =
    isDark && "project-card-financial-data__divider--dark-mode";
  const textColor = isDark && "fc--white";
  return (
    <div className="project-card-financial-data">
      {withDivider && <hr className={`project-card-financial-data__divider ${dividerColor}`} />}
      <div className="project-card-financial-data__in-study-content">
        <p className={`fs--sm ${textColor}`}>
          Estamos analizando la viabilidad de este proyecto.
        </p>
        <p className={`fs--sm ${textColor}`}>
          Te enviaremos un correo electrónico cuando esté disponible para
          invertir.
        </p>
        <p className={`fs--sm ${textColor}`}>
          <b>Recuerda visitar la bandeja de spam.</b>
        </p>
      </div>
    </div>
  );
};
