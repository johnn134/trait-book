import React, { useState, useCallback, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Box } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

import ProfileList from "@/components/core/traitbook/ProfileList";
import ProfileWorkspace from "../core/traitbook/ProfileWorkspace";

type TraitBookProps = {
  state: StoreState;
  saveState: (state: StoreState) => void;
};

const TraitBook = ({ state, saveState }: TraitBookProps): React.ReactElement => {
  //  #region State

  const [profiles, setProfiles] = useState<Profile[]>(state.profiles);
  const [selectedProfileIndex, setSelectedProfileIndex] = useState<number | undefined>(profiles.length ? 0 : undefined);

  //  #endregion

  //  #region Handlers

  const addProfile = useCallback(
    (profile: Profile) => {
      setProfiles([...profiles, profile]);
    },
    [profiles],
  );

  const updateProfile = useCallback(
    (_profile: Profile, index: number) => {
      const profilesCpy = JSON.parse(JSON.stringify(profiles));
      profilesCpy[index] = _profile;
      setProfiles(profilesCpy);
    },
    [profiles],
  );

  const deleteProfile = useCallback(
    (index: number) => {
      const profilesCpy = JSON.parse(JSON.stringify(profiles)) as Profile[];
      profilesCpy.splice(index, 1);
      if (selectedProfileIndex && profilesCpy.length <= selectedProfileIndex) {
        setSelectedProfileIndex(selectedProfileIndex - 1);
      }
      setProfiles(profilesCpy);
    },
    [profiles, selectedProfileIndex],
  );

  const createProfile = useCallback(() => {
    addProfile({
      id: uuidv4(),
      name: "First Last",
      avatarImage: undefined,
      traits: [],
    });
    setSelectedProfileIndex(profiles.length);
  }, [addProfile, profiles.length]);

  const onWorkspaceProfileUpdate = useCallback(
    (profile: Profile) => {
      if (selectedProfileIndex !== undefined) {
        updateProfile(profile, selectedProfileIndex);
      }
    },
    [updateProfile, selectedProfileIndex],
  );

  const onWorkspaceProfileDelete = useCallback(() => {
    if (selectedProfileIndex !== undefined) {
      deleteProfile(selectedProfileIndex);
    }
  }, [deleteProfile, selectedProfileIndex]);

  const onProfileSelectChange = useCallback((event: SelectChangeEvent) => {
    setSelectedProfileIndex(parseInt(event.target.value, 10));
  }, []);

  //  #endregion

  //  #region Effects

  //  Save state to store on change
  useEffect(() => {
    saveState({
      ...state,
      profiles,
    });
  }, [saveState, profiles, state]);

  //  #endregion

  //  #region Conditional Components

  //  #endregion

  //  #region Render

  return (
    <Box id="trait-book-container" sx={{ display: { sx: "block", md: "flex" }, width: "100%", height: "100%" }}>
      <ProfileList
        profiles={profiles}
        selectedProfileIndex={selectedProfileIndex}
        createProfile={createProfile}
        onProfileListItemClick={setSelectedProfileIndex}
        onProfileSelectChange={onProfileSelectChange}
      />
      <ProfileWorkspace
        profile={selectedProfileIndex !== undefined ? profiles[selectedProfileIndex] : undefined}
        profiles={profiles}
        updateProfile={onWorkspaceProfileUpdate}
        deleteProfile={onWorkspaceProfileDelete}
      />
    </Box>
  );

  //  #endregion
};

export default TraitBook;
