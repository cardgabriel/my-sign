import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useStore from "../userStore/userStore";
import Box from "@material-ui/core/Box/Box";
import Button from "@material-ui/core/Button/Button";
import AvatarUser from "../components/AvatarUser";

const Home: React.FC = () => {
  const userPicture = useStore((state) => state.getRandomPicture);
  const user = useStore((state) => state.user);

  useEffect(() => {
    userPicture();
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      height={"100vh"}
    >
      <AvatarUser src={user.picture} />
      <Link to="/stepper">
        <Button variant="contained" color="primary" disableElevation>
          Ingresar
        </Button>
      </Link>
    </Box>
  );
};

export default Home;
