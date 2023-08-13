import { useTheme } from "next-themes";
import Highlight, { defaultProps, type Language, Prism } from "prism-react-renderer";
import darkTheme from "prism-react-renderer/themes/nightOwl";
import lightTheme from "prism-react-renderer/themes/nightOwlLight";
import { FC, useEffect, useState } from "react";

// @ts-ignore
(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-rust");
require("prismjs/components/prism-kotlin");
require("prismjs/components/prism-csharp");

interface CodeProps {
  code: string;
  show: boolean;
  language: Language;
  animationDelay?: number;
  animated?: boolean;
  interactiveSpeed?: number;
}

const Code: FC<CodeProps> = ({
  code,
  show,
  animated,
  animationDelay,
  language,
  interactiveSpeed,
}) => {
  const { theme: applicationTheme } = useTheme();
  const [text, setText] = useState<string>(animated ? "" : code);

  useEffect(() => {
    if (show && animated) {
      let i = 0;
      setTimeout(() => {
        const intervalId = setInterval(() => {
          setText(code.slice(0, i));
          i++;
          if (i > code.length) {
            clearInterval(intervalId);
          }
        }, interactiveSpeed || 10);

        return () => clearInterval(intervalId);
      }, animationDelay || 150);
    }
  }, [code, show, animated, animationDelay, interactiveSpeed]);

  // number of lines
  const lines = text.split(/\r\n|\r|\n/).length;

  const theme = applicationTheme === "light" ? lightTheme : darkTheme;

  return (
    <Highlight {...defaultProps} code={text} language={language} theme={theme}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={
            className + "transition-all w-fit bg-transparent duration-100 py-0 overflow-hidden "
          }
          style={{
            maxHeight: show ? lines * 24 : 0,
            opacity: show ? 1 : 0,
          }}
        >
          {tokens.map((line, i) => {
            // eslint-disable-next-line no-unused-vars
            const { key, ...rest } = getLineProps({ line, key: i });
            return (
              <div key={`line-${i}`} style={{ position: "relative" }} {...rest}>
                {line.map((token, index) => {
                  // eslint-disable-next-line no-unused-vars
                  const { key, ...props } = getTokenProps({ token, i });
                  return <span key={index} {...props} />;
                })}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;
