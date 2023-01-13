import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_current } from "../redux/Action/authAction";
const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_current());
  }, [dispatch]);
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h1>{user.email}</h1>
    </div>
  );
};

export default Profile;
