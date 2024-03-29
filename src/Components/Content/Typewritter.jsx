import React from "react";
import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ['Full Stack Developer',
            'React Developer',
            'Techincal Lead',
            'Node Developer'],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
    </>
  );
};
