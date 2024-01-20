import React from "react";
import { List, Avatar, Paper, Typography, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";

import ProfileListItem from "./ProfileListItem";

type ProfileListProps = {
  profiles: Profile[];
  selectedProfileIndex?: number;
  onProfileListItemClick: (index: number) => void;
  createProfile: () => void;
};

const ProfileList = ({
  profiles,
  selectedProfileIndex,
  onProfileListItemClick,
  createProfile,
}: ProfileListProps): React.ReactElement => {
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
    <Paper
      id="profile-paper"
      elevation={6}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "240px",
        marginRight: "16px",
        paddingTop: "16px",
      }}
    >
      <Avatar sx={{ width: "60px", height: "60px", marginBottom: "4px" }}>
        <AccountCircleIcon fontSize="large" />
      </Avatar>
      <Typography style={{ marginBottom: "8px" }}>Profiles</Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper", flex: 1 }}>
        {profiles.map((profile, index) => (
          <ProfileListItem
            profile={profile}
            onClick={() => onProfileListItemClick(index)}
            selected={selectedProfileIndex === index}
            key={profile.id}
          />
        ))}
      </List>
      <Button startIcon={<AddIcon />} fullWidth onClick={createProfile}>
        Add Profile
      </Button>
    </Paper>
  );

  //  #endregion
};

export default ProfileList;
