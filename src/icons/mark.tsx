import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

interface MarkIconProps extends SvgProps {
  color: string;
}
const MarkIcon = (props: MarkIconProps) => (
  <Svg fill="none" stroke={props.color} viewBox="0 0 24 24" {...props}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </Svg>
);

export default MarkIcon;
