import { FunctionComponent } from "react";
import GgStateidle from "./GgStateidle";
import styles from "./AnimaTest.module.css";
const AnimaTest: FunctionComponent = () => {
  return (
    <div className={styles.animaTest} id="container">
      <GgStateidle
        label="work damnit"
        ggStateidleBorder="1.7px solid var(--color-turquoise-200)"
        ggStateidlePosition="unset"
        wrapperWidth="unset"
        wrapperPadding="22.714862823486328px 45.429725646972656px"
        wrapperBoxSizing="border-box"
        wrapperAlignSelf="stretch"
        labelFontSize="25.2px"
        labelTextShadow="0px 0px 14.7px #2bede6"
      />
    </div>
  );
};

export default AnimaTest;
