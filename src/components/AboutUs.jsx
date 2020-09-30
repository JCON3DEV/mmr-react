import React from "react";
// import {makeStyles} from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
import {Icon, Image, Card} from "semantic-ui-react";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
import "./aboutUs.css";
import "semantic-ui-css/semantic.min.css";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
// });

const src = "/images/wireframe/image.png";

export default function ImgMediaCard() {
  return (
    <Container>
      {/* <div className="margintop"> */}
      <Card.Group itemsPerRow={1}>
        <Box mt={10} ml={3}>
          <Card className="margintop">
            <Image
              size="tiny"
              src="https://images.squarespace-cdn.com/content/v1/59e7a8e429f187c4051a271f/1513300180363-M6O0J2OMC2XOM0VAXMTY/ke17ZwdGBToddI8pDm48kPTuWOL9EeXjtwrCO6CIVFlZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw1J04mMeNBLz29E86rhKs_D8lTlhO3N1QLTGtw2CxgU1AHUfpKgJiU7H7ei5DXT-o/Marty_Open+Water.jpg"
              wrapped
              centered={true}
              ui={false}
            />
            <Card.Content>
              <Card.Header>Dr. Martin Haulena, DVM, MSc.</Card.Header>
              <Card.Description>Staff Veterinarian</Card.Description>
            </Card.Content>
            <Image
              size="tiny"
              src="https://images.squarespace-cdn.com/content/v1/59e7a8e429f187c4051a271f/1513300180363-M6O0J2OMC2XOM0VAXMTY/ke17ZwdGBToddI8pDm48kPTuWOL9EeXjtwrCO6CIVFlZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw1J04mMeNBLz29E86rhKs_D8lTlhO3N1QLTGtw2CxgU1AHUfpKgJiU7H7ei5DXT-o/Marty_Open+Water.jpg"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>Dr. Martin Haulena, DVM, MSc.</Card.Header>
              <Card.Description>Staff Veterinarian</Card.Description>
            </Card.Content>
            <Image
              size="tiny"
              src="https://images.squarespace-cdn.com/content/v1/59e7a8e429f187c4051a271f/1513300180363-M6O0J2OMC2XOM0VAXMTY/ke17ZwdGBToddI8pDm48kPTuWOL9EeXjtwrCO6CIVFlZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw1J04mMeNBLz29E86rhKs_D8lTlhO3N1QLTGtw2CxgU1AHUfpKgJiU7H7ei5DXT-o/Marty_Open+Water.jpg"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>Dr. Martin Haulena, DVM, MSc.</Card.Header>
              <Card.Description>Staff Veterinarian</Card.Description>
            </Card.Content>
            <Image
              size="tiny"
              src="https://images.squarespace-cdn.com/content/v1/59e7a8e429f187c4051a271f/1513300180363-M6O0J2OMC2XOM0VAXMTY/ke17ZwdGBToddI8pDm48kPTuWOL9EeXjtwrCO6CIVFlZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw1J04mMeNBLz29E86rhKs_D8lTlhO3N1QLTGtw2CxgU1AHUfpKgJiU7H7ei5DXT-o/Marty_Open+Water.jpg"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>Dr. Martin Haulena, DVM, MSc.</Card.Header>
              <Card.Description>Staff Veterinarian</Card.Description>
            </Card.Content>
            <Image
              size="tiny"
              src="https://images.squarespace-cdn.com/content/v1/59e7a8e429f187c4051a271f/1513300180363-M6O0J2OMC2XOM0VAXMTY/ke17ZwdGBToddI8pDm48kPTuWOL9EeXjtwrCO6CIVFlZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw1J04mMeNBLz29E86rhKs_D8lTlhO3N1QLTGtw2CxgU1AHUfpKgJiU7H7ei5DXT-o/Marty_Open+Water.jpg"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>Dr. Martin Haulena, DVM, MSc.</Card.Header>
              <Card.Description>Staff Veterinarian</Card.Description>
            </Card.Content>
            <Image
              size="tiny"
              src="https://images.squarespace-cdn.com/content/v1/59e7a8e429f187c4051a271f/1513300180363-M6O0J2OMC2XOM0VAXMTY/ke17ZwdGBToddI8pDm48kPTuWOL9EeXjtwrCO6CIVFlZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw1J04mMeNBLz29E86rhKs_D8lTlhO3N1QLTGtw2CxgU1AHUfpKgJiU7H7ei5DXT-o/Marty_Open+Water.jpg"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>Dr. Martin Haulena, DVM, MSc.</Card.Header>
              <Card.Description>Staff Veterinarian</Card.Description>
            </Card.Content>
          </Card>
        </Box>
      </Card.Group>
      {/* </div> */}
    </Container>
  );
}

// export default function ImgMediaCard() {
//   const classes = useStyles();

//   return (
//     <Container maxWidth="sm">
//       <div class="ui six doubling cards">
//         <div className="card">
//           <div className="image">
//             <img
//               width="300"
//               src="https://images.squarespace-cdn.com/content/v1/59e7a8e429f187c4051a271f/1513300180363-M6O0J2OMC2XOM0VAXMTY/ke17ZwdGBToddI8pDm48kPTuWOL9EeXjtwrCO6CIVFlZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw1J04mMeNBLz29E86rhKs_D8lTlhO3N1QLTGtw2CxgU1AHUfpKgJiU7H7ei5DXT-o/Marty_Open+Water.jpg?format=300w"
//               alt="text"
//             />
//             <p>
//               <em>Staff Veterinarian</em>
//               <br />
//               Dr. Martin Haulena, DVM, MSc.
//             </p>
//           </div>
//         </div>
//         <div className="card">
//           <div className="image">
//             <img
//               src="https://images.squarespace-cdn.com/content/v1/59e7a8e429f187c4051a271f/1513300246548-A4W55NOGVNP7X6AJ5ZRL/ke17ZwdGBToddI8pDm48kDlgluwBU5haXwZmVg2eF2lZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyRbbOmNInTZdmBP-n33laVAFFtBU_RxiJbFZNwBvN3s4kkZImk3JNGP0jmHlAyZl8/IMG_7477.jpg?format=500w"
//               alt="text"
//             />
//             <p>
//               <em>
//                 <strong>Rescue Center Manager</strong>
//               </em>
//               <br />
//               Lindsaye Akhurst
//             </p>
//           </div>
//         </div>
//         <div className="card">
//           <div className="image">
//             <img
//               src="https://images.squarespace-cdn.com/content/v1/59e7a8e429f187c4051a271f/1511898636803-EXE2RG28AFV7DU7RNGUV/ke17ZwdGBToddI8pDm48kHH9S2ID7_bpupQnTdrPcoF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0nQwvinDXPV4EYh2MRzm-RRB5rUELEv7EY2n0AZOrEupxpSyqbqKSgmzcCPWV5WMiQ/Emily.JPG?format=300w"
//               alt="text"
//             />
//             <p>
//               <em>
//                 <strong>Rescue Center Manager</strong>
//               </em>
//               <br />
//               Emily Johnson
//             </p>
//           </div>
//         </div>
//         <div className="card">
//           <div className="image">
//             <img
//               src="https://images.squarespace-cdn.com/content/v1/59e7a8e429f187c4051a271f/1511898691946-D8HHVWYWPIJ5S4JSU830/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Shanie-Fradette.jpg?format=300w"
//               alt="text"
//             />
//             <p>
//               <em>
//                 <strong>Senior Veterinary Technician</strong>
//               </em>
//               <br />
//               Shanie Fradette
//             </p>
//           </div>
//         </div>
//         <div className="card">
//           <div className="image">
//             <img
//               src="https://images.squarespace-cdn.com/content/v1/59e7a8e429f187c4051a271f/1511898707730-H5M3UG3L3EQYNKQTKWX1/ke17ZwdGBToddI8pDm48kLbrb96cIPqpYH68Wnf5KvFZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI5g_jQmUeD4Pq3JVUCYSRtKhvNLm1vuwcZnVq9pUkOQkKMshLAGzx4R3EDFOm1kBS/Amelia+MacRae.jpg?format=300w"
//               alt="text"
//             />
//             <p>
//               <em>
//                 <strong>Rehabilitation Specialist Adviser</strong>
//               </em>
//               <br />
//               Amelia MacRae, PhD
//             </p>
//           </div>
//         </div>
//         <div className="card">
//           <div className="image">
//             <img
//               src="https://images.squarespace-cdn.com/content/v1/59e7a8e429f187c4051a271f/1565291167224-0KB0MS157IBK3NVGG2IO/ke17ZwdGBToddI8pDm48kK1raw0iF6NsobpPQibsBrJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URHhj5un_tIUO8fgu8ytGGmzbnzwOPxu5D4cXfMiGyjnhajF091QNjmz72M4wbDDNA/Hannah2.jpg?format=300w"
//               alt="text"
//             />
//             <p>
//               <em>
//                 <strong>Veterinarian</strong>
//               </em>
//               <br />
//               Dr. Hannah Drumm, DVM
//             </p>
//           </div>
//         </div>
//         <Button variant="outlined" color="secondary">
//           Volunteer With us
//         </Button>
//       </div>
//     </Container>
//   );
// }
