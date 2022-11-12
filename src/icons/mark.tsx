import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

interface MarkIconProps extends SvgProps {
  size: number;
  color: string;
}
const MarkIcon = (props: MarkIconProps) => (
  <Svg width={props.size} height={props.size} {...props}>
    <Path d="M0 0h48v1H0z" fill={props.color} fillRule="evenodd" />
  </Svg>
);

export default MarkIcon;
