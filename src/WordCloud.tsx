import React, { useEffect, useState } from "react";
import TagCloud from "react-tag-cloud";
import { Word3D } from "./Word3D";

interface Styles {
  [key: string]: React.CSSProperties;
}

const styles: Styles = {
  default: {
    fontFamily: "sans-serif",
    fontSize: 30,
    fontStyle: "italic",
    padding: 4,
  },
  large: {
    fontSize: 60,
    fontWeight: "bold",
  },
  small: {
    fontSize: 16,
  },
};

interface WordGroups {
  [key: string]: string[];
}

const words: WordGroups = {
  large: [
    "react-native",
    "Expo",
    "TypeScript",
    "react-native-shared-element",
    "Vicky Parking",
    "My Way",
    "StaffTraveler",
    "Untire",
    "Arion Run",
    "On Air Events",
    "RUST",
  ],
  normal: [
    "Firestorter",
    "react-native-magic-move",
    "react-native-bundle-visualizer",
    "JavaScript",
    "React.js",
    "iOS",
    "Android",
    "Objective-C",
    "Animations",
    "Java",
    "Native",
    "Full stack",
    "Creative",
    "Architect",
    "Firebase",
    "Circle-CI",
    "autolayout.js",
    "node-web-bluetooth",
    "react-tag-cloud",
    "Node.js",
    "Web Bluetooth",
    "TheoPlayer",
    "famous",
    "HTML",
    "CSS",
    "ES6",
    "Async/await",
    "eslint",
    "Flow-Xpert",
    "FlowX",
    "UX",
    "Mocha",
    "Jest",
    "C++",
    "SQL",
    "YAML",
    "XCode",
    "Rouwcollectie",
    "Git",
    "TDD",
  ],
  small: ["Cordova", "MFC", ".NET", "VBA", "Win-CE", "Nijmegen"],
};

export function WordCloud() {
  const [, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((tick) => tick + 1);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    // @ts-expect-error style is not typed correctly
    <TagCloud className="flex-1" style={styles.default}>
      {Object.entries(words).map(([key, wordGroup]) =>
        wordGroup.map((word, index) => (
          <Word3D key={word} style={styles[key]} showDelay={2000 + index * 100}>
            {word}
          </Word3D>
        ))
      )}
    </TagCloud>
  );
}
