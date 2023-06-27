import React from "react";

export const InStudyDarkMode = ({ withDivider }: { withDivider: boolean }) => {
  return (
    <div className="project-card-financial-data">
      {withDivider && (
        <hr
          className={`project-card-financial-data__divider project-card-financial-data__divider--dark-mode`}
        />
      )}
      <div className="project-card-financial-data__in-study-content">
        <p className={`fs--sm fc--white`}>
          Estamos analizando la viabilidad de este proyecto.
        </p>
        <p className={`fs--sm fc--white`}>
          Te enviaremos un correo electrónico cuando esté disponible para
          invertir.
        </p>
        <p className={`fs--sm fc--white`}>
          <b>Recuerda visitar la bandeja de spam.</b>
        </p>
      </div>
    </div>
  );
};
