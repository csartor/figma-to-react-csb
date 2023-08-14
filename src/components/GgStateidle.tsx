import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GgStateidle.module.css";

type GgStateidleType = {
  label?: string;

  /** Style props */
  ggStateidleBorder?: CSSProperties["border"];
  ggStateidlePosition?: CSSProperties["position"];
  wrapperWidth?: CSSProperties["width"];
  wrapperPadding?: CSSProperties["padding"];
  wrapperBoxSizing?: CSSProperties["boxSizing"];
  wrapperAlignSelf?: CSSProperties["alignSelf"];
  labelFontSize?: CSSProperties["fontSize"];
  labelTextShadow?: CSSProperties["textShadow"];
};

const GgStateidle: FunctionComponent<GgStateidleType> = ({
  label = "Label",
  ggStateidleBorder,
  ggStateidlePosition,
  wrapperWidth,
  wrapperPadding,
  wrapperBoxSizing,
  wrapperAlignSelf,
  labelFontSize,
  labelTextShadow,
}) => {
  const ggStateidleStyle: CSSProperties = useMemo(() => {
    return {
      border: ggStateidleBorder,
      position: ggStateidlePosition,
    };
  }, [ggStateidleBorder, ggStateidlePosition]);

  const wrapperStyle: CSSProperties = useMemo(() => {
    return {
      width: wrapperWidth,
      padding: wrapperPadding,
      boxSizing: wrapperBoxSizing,
      alignSelf: wrapperAlignSelf,
    };
  }, [wrapperWidth, wrapperPadding, wrapperBoxSizing, wrapperAlignSelf]);

  const labelStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: labelFontSize,
      textShadow: labelTextShadow,
    };
  }, [labelFontSize, labelTextShadow]);

  return (
    <button className={styles.ggstateidle} style={ggStateidleStyle}>
      <div className={styles.wrapper} style={wrapperStyle}>
        <div className={styles.label} style={labelStyle}>
          {label}
        </div>
      </div>
    </button>
  );
};

export default GgStateidle;
