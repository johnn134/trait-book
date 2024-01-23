import React from "react";
import {
  List,
  Avatar,
  Paper,
  Typography,
  Button,
  IconButton,
  Box,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import { SelectChangeEvent } from "@mui/material/Select";

import ProfileListItem from "./ProfileListItem";

type ProfileListProps = {
  profiles: Profile[];
  selectedProfileIndex?: number;
  createProfile: () => void;
  onProfileListItemClick: (index: number) => void;
  onProfileSelectChange: (event: SelectChangeEvent) => void;
};

const ProfileList = ({
  profiles,
  selectedProfileIndex,
  createProfile,
  onProfileListItemClick,
  onProfileSelectChange,
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
      sx={{
        display: "flex",
        flexDirection: { xs: "row", md: "column" },
        alignItems: "center",
        width: { xs: "calc(100% - 16px)", md: "240px" },
        marginRight: "16px",
        padding: { xs: "8px", md: "16px 0 0" },
        marginBottom: { xs: "16px", md: "0" },
      }}
    >
      <Box sx={{ marginRight: { xs: "16px", md: "0" } }}>
        <Avatar sx={{ width: "60px", height: "60px", marginBottom: "4px" }}>
          <AccountCircleIcon fontSize="large" />
        </Avatar>
        <Typography sx={{ marginBottom: "8px", display: { xs: "none", md: "block" } }}>Profiles</Typography>
      </Box>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          flex: 1,
          display: { xs: "none", md: "block" },
        }}
      >
        {profiles.map((profile, index) => (
          <ProfileListItem
            profile={profile}
            onClick={() => onProfileListItemClick(index)}
            selected={selectedProfileIndex === index}
            key={profile.id}
          />
        ))}
      </List>
      <FormControl variant="standard" fullWidth sx={{ display: { xs: "inline-flex", md: "none" } }}>
        <InputLabel id="compare-label">Profile</InputLabel>
        <Select
          labelId="compare-label"
          id="compare-select"
          value={`${selectedProfileIndex}`}
          label="Profile"
          onChange={onProfileSelectChange}
        >
          {profiles.map((_profile, index) => (
            <MenuItem value={`${index}`} key={_profile.id}>
              {_profile.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        startIcon={<AddIcon />}
        fullWidth
        onClick={createProfile}
        sx={{ display: { xs: "none", md: "inline-flex" } }}
      >
        Add Profile
      </Button>
      <IconButton
        onClick={createProfile}
        sx={{ display: { xs: "block", md: "none" }, marginLeft: { xs: "16px", md: "0" } }}
      >
        <AddIcon />
      </IconButton>
    </Paper>
  );

  //  #endregion
};

export default ProfileList;
