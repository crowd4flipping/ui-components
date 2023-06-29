import React from "react";

export const ProjectInStudyInfo = ({
  fullWithDivider,
}: {
  fullWithDivider: boolean;
}) => {
  return (
    <div>
      <p className={`fs--base`}>
        Estamos analizando la viabilidad de este proyecto.
      </p>
      <br />
      <p className={`fs--base`}>
        Te enviaremos un correo electrónico cuando esté abierto a inversión.
      </p>
    </div>
  );
};
