/* Context file to fetch all Profiles
 * handleFollow and unhandleFollow functions
   Which use the followHelper function in utils
 * query context is just used to reload after selection is changed */
import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { followHelper, unfollowHelper } from "../utils/utils";

const ProfileDataContext = createContext();
const SetProfileDataContext = createContext();

export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);

export const QueryContext = createContext();
export const SetQueryContext = createContext();
export const useQueryContext = () => useContext(QueryContext);
export const useSetQueryContext  = () => useContext(SetQueryContext);

export const EditProfileContext = createContext();
export const SetEditProfileContext = createContext();
export const useEditProfileContext = () => useContext(EditProfileContext);
export const useSetEditProfileContext = () => useContext(SetEditProfileContext);

export const ProfileDataProvider = ({ children }) => {
  const [editProfile, setEditProfile] = useState(false);
  const[query, setQuery] = useState("");
  const [profileData, setProfileData] = useState({
    // This is used on the Profile page
    profilePage: { results: [] },
    profilesAll: { results: [] },
  });

  const currentUser = useCurrentUser();

  const handleFollow = async (clickedProfile) => {
    /* Function to create a follow item if a users clicks Follow
         and update the states to reflect this */
    try {
      const { data } = await axiosRes.post("/followers/", {
        followed: clickedProfile.id,
      });

      setProfileData((prevState) => ({
        ...prevState,
        profilePage: {
          results: prevState.profilePage.results.map((profile) =>
            followHelper(profile, clickedProfile, data.id)
          ),
        },
        profilesAll: {
          ...prevState.profilesAll,
          results: prevState.profilesAll.results.map((profile) =>
            followHelper(profile, clickedProfile, data.id)
          ),
        },
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnfollow = async (clickedProfile) => {
    /* Function to remove a follow item if a users clicks unFollow
         and update the states to reflect this */
    try {
      await axiosRes.delete(`/followers/${clickedProfile.following_id}/`);

      setProfileData((prevState) => ({
        ...prevState,
        profilePage: {
          results: prevState.profilePage.results.map((profile) =>
            unfollowHelper(profile, clickedProfile)
          ),
        },
        profilesAll: {
          ...prevState.profilesAll,
          results: prevState.profilesAll.results.map((profile) =>
            unfollowHelper(profile, clickedProfile)
          ),
        },
      }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/profiles/?ordering=-followers_count&search=${query}`);
        setProfileData((prevState) => ({
          ...prevState,
          profilesAll: data,
        }));
        setEditProfile(false);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [currentUser, query, editProfile]);

  return (
    <ProfileDataContext.Provider value={profileData}>
      <SetProfileDataContext.Provider value={{setProfileData, handleFollow, handleUnfollow}}>
        <QueryContext.Provider value={query}>
          <SetQueryContext.Provider value={setQuery}>
            <EditProfileContext.Provider value={editProfile}>
              <SetEditProfileContext.Provider value={setEditProfile}>
                {children}
              </SetEditProfileContext.Provider>
            </EditProfileContext.Provider>
          </SetQueryContext.Provider>
        </QueryContext.Provider>
      </SetProfileDataContext.Provider>
    </ProfileDataContext.Provider>
  );
};