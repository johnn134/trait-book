import React from "react";
import { Box, Typography } from "@mui/material";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

/**
 * If you do not wish to specify a React element
 * (i.e., errorElement={<MyErrorBoundary />})
 * you may specify an ErrorBoundary component instead
 * (i.e., ErrorBoundary={MyErrorBoundary})
 * and React Router will call createElement for you internally.
 */
type RoutingErrorProps = {
  //  Props
};

const RoutingError = (_: RoutingErrorProps): React.ReactElement => {
  //  #region State

  const error = useRouteError();
  console.error(error);

  //  #endregion

  //  #region Handlers

  //  #endregion

  //  #region Effects

  //  #endregion

  //  #region Conditional Components

  //  #endregion

  //  #region Render

  if (isRouteErrorResponse(error)) {
    return (
      <Box id="routing-error-module">
        <Typography>{error.status} ERROR</Typography>
        <Typography>{error.statusText}</Typography>
        {error.data?.message && <p>{error.data.message}</p>}
      </Box>
    );
  }

  return (
    <Box id="routing-error-module">
      <Typography>404 ERROR</Typography>
    </Box>
  );

  //  #endregion
};

export default RoutingError;
