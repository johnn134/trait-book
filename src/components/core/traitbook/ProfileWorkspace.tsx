import React from "react";
import { Paper } from "@mui/material";

import ProfileCard, { ProfileCardSharedProps } from "@/components/core/traitbook/ProfileCard";

interface ProfileWorkspaceProps extends ProfileCardSharedProps {
  profile: Profile | undefined;
  profiles: Profile[];
}

const ProfileWorkspace = ({
  profile,
  profiles,
  updateProfile,
  deleteProfile,
}: ProfileWorkspaceProps): React.ReactElement => {
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
    <Paper id="profile-paper" elevation={6} style={{ display: "flex", flex: 1 }}>
      {profile !== undefined && (
        <ProfileCard
          profile={profile}
          profiles={profiles}
          updateProfile={updateProfile}
          deleteProfile={deleteProfile}
        />
      )}
    </Paper>
  );

  //  #endregion
};

export default ProfileWorkspace;
