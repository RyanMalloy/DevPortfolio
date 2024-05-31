import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TextSwap = ({ texts }) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <TextTransition springConfig={presets.gentle}>
        {texts[index % texts.length]}
      </TextTransition>
    </>
  );
};

export default TextSwap;
