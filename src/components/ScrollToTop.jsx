// import React from "react";
// import ScrollUpButton from "react-scroll-up-button"; //Add this line Here

// export default class Index extends React.Component {
//   render() {
//     return (
//       <div>
//         {/* <Link to=""> */}
//         <ScrollUpButton
//           StopPosition={0}
//           ShowAtPosition={150}
//           EasingType="easeOutCubic"
//           AnimationDuration={500}
//           ContainerClassName="ScrollUpButton__Container"
//           TransitionClassName="ScrollUpButton__Toggled"
//           style={{}}
//           ToggledStyle={{}}
//         />
//         {/* </Link> */}
//         TOP
//       </div>
//     );
//   }
// }

import {useEffect} from "react";
import {useLocation} from "react-router-dom";
export default function ScrollToTop() {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
