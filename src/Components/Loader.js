import { Container, Grid } from "@mui/material";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const Loader = () => {

    return(
        <Container>
        <Grid
          container
          style={{ height: window.innerHeight - 50 }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid
            container
            alignItems={"center"}
            direction={"column"}
          >
        <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          </Grid>
        </Grid>
      </Container>
    )
}

export default Loader