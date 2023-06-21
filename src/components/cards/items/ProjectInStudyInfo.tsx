import React from "react";

export const ProjectInStudyInfo = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const dividerColor = isDarkMode && "financial-data__divider--dark-mode";
const textColor = isDarkMode && "fc--white";
  return (
    <dl className="financial-data">
      <hr className={`financial-data__divider ${dividerColor}`} />
      <div className="financial-data__in-study-content">
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
    </dl>
  );
};
