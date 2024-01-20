import React from "react";
import { ListItemButton, ListItemText, ListItemAvatar, Avatar } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

import { determinePersonalityType, calculateBalance } from "@/utilities/TraitUtilities";

type ProfileListItemProps = {
  profile: Profile;
  selected?: boolean;
  onClick: () => void;
};

const ProfileListItem = ({ profile, selected, onClick }: ProfileListItemProps): React.ReactElement => {
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
    <ListItemButton selected={selected} onClick={onClick}>
      <ListItemAvatar>
        <Avatar>{calculateBalance(profile.traits)}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={profile.name} secondary={determinePersonalityType(profile.traits)} />
    </ListItemButton>
  );

  //  #endregion
};

export default ProfileListItem;
