import React from "react";
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here

export default function ScrollToTopButton() {
  return (
    <div>
      <ScrollUpButton
        StopPosition={0}
        ShowAtPosition={150}
        EasingType="easeOutCubic"
        AnimationDuration={500}
        ContainerClassName="ScrollUpButton__Container"
        TransitionClassName="ScrollUpButton__Toggled"
        style={{color: "red"}}
        ToggledStyle={{}}
      />
    </div>
  );
}
