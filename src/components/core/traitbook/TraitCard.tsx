import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

import { TRAIT_ICON_PIXEL_SIZE } from "@/config/TraitAssets";

const TraitPixelSize = `${TRAIT_ICON_PIXEL_SIZE * 2}px`;

type TraitCardProps = {
  trait: TraitAssetData;
  selected?: boolean;
  onClick?: () => void;
};

const TraitCard = ({ trait, selected, onClick }: TraitCardProps): React.ReactElement => {
  //  #region State

  //  #endregion

  //  #region Handlers

  //  #endregion

  //  #region Effects

  //  #endregion

  //  #region Conditional Components

  //  #endregion

  //  #region Render

  return (
    <Card
      id="trait-card"
      elevation={6}
      onClick={onClick}
      sx={{
        width: "fit-content",
        height: "fit-content",
        margin: "4px 8px",
        ":hover": {
          backgroundColor: "#777777",
          cursor: "pointer",
        },
        ...(selected
          ? {
              backgroundColor: "#666666",
            }
          : {}),
      }}
    >
      <CardMedia component="img" image={trait.icon} alt={trait.type} sx={{ objectFit: "fill" }} />
      <CardContent style={{ display: "flex", justifyContent: "center", padding: "0 8px 8px" }}>
        <Typography color="white" fontSize="14px">
          {`${trait.type[0].toUpperCase()}${trait.type.slice(1)}`}
        </Typography>
      </CardContent>
    </Card>
  );

  //  #endregion
};

export default TraitCard;
