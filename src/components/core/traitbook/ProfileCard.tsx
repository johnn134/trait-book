import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Avatar,
  IconButton,
  Button,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Typography,
  Box,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Taijitu from "@/assets/images/icons/1200px-Esoteric_Taijitu.svg.png";

import {
  calculateBalance,
  calculateConflict,
  calculateHarmony,
  determineProfilesRelation,
} from "@/utilities/TraitUtilities";

import TraitAssets, { YangTraits } from "@/config/TraitAssets";
import TraitCard from "./TraitCard";

const FOIL_BASE_PROFILE: Profile = {
  id: "foil",
  name: "Foil",
  avatarImage: undefined,
  traits: [],
};

const ICON_SMALL_SIZE = "25px";
const ICON_MD_SIZE = "40px";

type ViewType = "default" | "compare" | "foil";

export interface ProfileCardSharedProps {
  updateProfile: (profile: Profile) => void;
  deleteProfile: () => void;
}

interface ProfileCardProps extends ProfileCardSharedProps {
  profile: Profile;
  profiles: Profile[];
}

const ProfileCard = ({ profile, profiles, updateProfile, deleteProfile }: ProfileCardProps): React.ReactElement => {
  //  #region State

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [view, setView] = useState<ViewType>("default");

  const [editProfile, setEditProfile] = useState<Profile>(profile);
  const [targetProfile, setTargetProfile] = useState<Profile | undefined>(undefined);

  //  #endregion

  //  #region Handlers

  const onEdit = () => {
    setEditProfile(profile);
    setIsEditing(true);
  };

  const onClear = () => {
    setIsEditing(false);
  };

  const onSubmit = () => {
    updateProfile(editProfile);
    setIsEditing(false);
  };

  const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditProfile({
      ...editProfile,
      name: event.target.value,
    });
  };

  const onTraitClick = (trait: TraitType) => () => {
    if (profile.traits.includes(trait)) {
      updateProfile({
        ...profile,
        traits: profile.traits.filter((_trait) => _trait !== trait),
      });
    } else {
      updateProfile({
        ...profile,
        traits: [...profile.traits.filter((_trait) => _trait !== TraitAssets[trait].foil), trait],
      });
    }
  };

  const toggleView = (_view: ViewType) => () => {
    setView(view === _view ? "default" : _view);
  };

  const onCompareSelectChange = (event: SelectChangeEvent) => {
    if (event.target.value === FOIL_BASE_PROFILE.id) {
      setTargetProfile({
        ...FOIL_BASE_PROFILE,
        traits: profile.traits.map((trait) => TraitAssets[trait].foil),
      });
    } else {
      setTargetProfile(profiles.find((_profile) => _profile.id === event.target.value));
    }
  };

  //  #endregion

  //  #region Effects

  useEffect(() => console.log(view), [view]);

  //  #endregion

  //  #region Conditional Components

  //  #endregion

  //  #region Render

  return (
    <Card
      id="profile-card"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "16px",
      }}
    >
      <CardHeader
        avatar={<Avatar style={{ color: "white" }}>{calculateBalance(profile.traits)}</Avatar>}
        action={
          isEditing ? (
            <>
              <IconButton aria-label="submit" onClick={onSubmit}>
                <CheckIcon />
              </IconButton>
              <IconButton aria-label="clear" onClick={onClear}>
                <ClearIcon />
              </IconButton>
            </>
          ) : (
            <IconButton aria-label="edit" onClick={onEdit}>
              <EditIcon />
            </IconButton>
          )
        }
        title={
          isEditing ? <TextField value={editProfile.name} onChange={onTitleChange} variant="standard" /> : profile.name
        }
        subheader={profile.traits
          .sort((a, b) => a.localeCompare(b))
          .map((trait) => (
            <Box
              component="img"
              src={TraitAssets[trait].icon}
              key={trait}
              sx={{
                width: { xs: ICON_SMALL_SIZE, md: ICON_MD_SIZE },
                height: { xs: ICON_SMALL_SIZE, md: ICON_MD_SIZE },
              }}
            />
          ))}
        sx={{ justifyContent: "center", "& .MuiCardHeader-action": { margin: "auto" } }}
      />
      <CardContent
        style={{
          width: "100%",
          height: "100%",
          overflowY: "scroll",
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <div style={{ width: "100%" }}>
          {Object.values(YangTraits).map((trait: TraitAssetData) => {
            let background = undefined;
            if (profile.traits.includes(trait.type)) {
              background = "linear-gradient(90deg, grey, 30%, #00000000)";
            } else if (profile.traits.includes(trait.foil)) {
              background = "linear-gradient(90deg, #00000000, 70%, grey)";
            }
            return (
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-around",
                  alignItems: "center",
                  background,
                }}
                key={trait.type}
              >
                <TraitCard
                  trait={trait}
                  selected={profile.traits.includes(trait.type)}
                  onClick={onTraitClick(trait.type)}
                />
                <ArrowBackIcon color={profile.traits.includes(trait.type) ? undefined : "disabled"} />
                <Box sx={{ height: { xs: "50px", md: "100px" }, width: { xs: "50px", md: "100px" } }}>
                  <img src={Taijitu} style={{ rotate: "180deg", width: "100%" }} />
                </Box>
                <ArrowForwardIcon color={profile.traits.includes(trait.foil) ? undefined : "disabled"} />
                <TraitCard
                  trait={TraitAssets[trait.foil]}
                  selected={profile.traits.includes(trait.foil)}
                  onClick={onTraitClick(trait.foil)}
                />
              </div>
            );
          })}
        </div>
      </CardContent>
      {view === "foil" && (
        <CardHeader
          avatar={
            <Avatar style={{ color: "white" }}>
              {calculateBalance(profile.traits.map((trait) => TraitAssets[trait].foil))}
            </Avatar>
          }
          title="Foil"
          subheader={profile.traits
            .map((trait) => TraitAssets[trait].foil)
            .map((trait) => (
              <Box
                component="img"
                src={TraitAssets[trait].icon}
                key={trait}
                sx={{
                  width: { xs: ICON_SMALL_SIZE, md: ICON_MD_SIZE },
                  height: { xs: ICON_SMALL_SIZE, md: ICON_MD_SIZE },
                }}
              />
            ))}
        />
      )}
      {view === "compare" && (
        <>
          <CardHeader
            avatar={
              <Avatar style={{ color: "white" }}>
                {calculateBalance(profile.traits.map((trait) => TraitAssets[trait].foil))}
              </Avatar>
            }
            title={
              <FormControl variant="standard" sx={{ width: "calc(100% - 16px)" }}>
                <InputLabel id="compare-label">Profile</InputLabel>
                <Select
                  labelId="compare-label"
                  id="compare-select"
                  value={targetProfile?.id || ""}
                  label="Profile"
                  onChange={onCompareSelectChange}
                >
                  {[
                    {
                      ...FOIL_BASE_PROFILE,
                      traits: profile.traits.map((trait) => TraitAssets[trait].foil),
                    },
                    ...profiles,
                  ].map((_profile) => (
                    <MenuItem value={_profile.id} key={_profile.id}>
                      {_profile.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            }
            subheader={
              <div>
                {targetProfile?.traits
                  .sort((a, b) => a.localeCompare(b))
                  .map((trait) => (
                    <Box
                      component="img"
                      src={TraitAssets[trait].icon}
                      key={trait}
                      sx={{
                        width: { xs: ICON_SMALL_SIZE, md: ICON_MD_SIZE },
                        height: { xs: ICON_SMALL_SIZE, md: ICON_MD_SIZE },
                      }}
                    />
                  ))}
              </div>
            }
          />
          <CardContent
            style={{
              width: "calc(100% - 32px)",
              paddingRight: "-16px",
              paddingTop: 0,
            }}
          >
            <div style={{ width: "calc(100% - 16px)" }}>
              <Typography>
                Relation: {targetProfile ? determineProfilesRelation(profile, targetProfile) : "None"}
              </Typography>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography>Harmony:</Typography>
                {targetProfile && (
                  <div style={{ display: "flex" }}>
                    {calculateHarmony(profile, targetProfile).map((trait) => (
                      <Box
                        component="img"
                        src={TraitAssets[trait].icon}
                        key={trait}
                        sx={{
                          width: { xs: ICON_SMALL_SIZE, md: ICON_MD_SIZE },
                          height: { xs: ICON_SMALL_SIZE, md: ICON_MD_SIZE },
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
              <Typography>Conflict:</Typography>
              {targetProfile && (
                <>
                  <div
                    id="conflict-selected-profile"
                    style={{ display: "flex", alignItems: "center", marginBottom: "4px" }}
                  >
                    <Avatar sx={{ height: "35px", width: "35px", marginRight: "4px" }}>{profile.name[0]}</Avatar>
                    <div id="trait-icons-container" style={{ display: "flex" }}>
                      {calculateConflict(profile, targetProfile).map((trait) => (
                        <Box
                          component="img"
                          src={TraitAssets[trait].icon}
                          key={trait}
                          sx={{
                            width: { xs: ICON_SMALL_SIZE, md: ICON_MD_SIZE },
                            height: { xs: ICON_SMALL_SIZE, md: ICON_MD_SIZE },
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div id="conflict-compared-profile" style={{ display: "flex", alignItems: "center" }}>
                    <Avatar sx={{ height: "35px", width: "35px", marginRight: "4px" }}>{targetProfile.name[0]}</Avatar>
                    <div id="trait-icons-container" style={{ display: "flex" }}>
                      {calculateConflict(profile, targetProfile)
                        .map((trait) => TraitAssets[trait].foil)
                        .map((trait) => (
                          <Box
                            component="img"
                            src={TraitAssets[trait].icon}
                            key={trait}
                            sx={{
                              width: { xs: ICON_SMALL_SIZE, md: ICON_MD_SIZE },
                              height: { xs: ICON_SMALL_SIZE, md: ICON_MD_SIZE },
                            }}
                          />
                        ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </>
      )}
      <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Button size="small" onClick={toggleView("compare")}>
            Compare
          </Button>
          <Button size="small" onClick={toggleView("foil")}>
            Foil
          </Button>
        </div>
        <div>
          <Button size="small" color="error" onClick={deleteProfile}>
            Delete Profile
          </Button>
        </div>
      </CardActions>
    </Card>
  );

  //  #endregion
};

export default ProfileCard;
