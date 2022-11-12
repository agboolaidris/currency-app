import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
interface TimeIconProps extends SvgProps {
  size: number;
  color: string;
}
const TimeIcon = (props: TimeIconProps) => (
  <Svg width={props.size} height={props.size} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.293.293a1 1 0 0 1 1.414 0L6 4.586 10.293.293a1 1 0 1 1 1.414 1.414L7.414 6l4.293 4.293a1 1 0 0 1-1.414 1.414L6 7.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L4.586 6 .293 1.707a1 1 0 0 1 0-1.414Z"
      fill={props.color}
    />
  </Svg>
);

export default TimeIcon;
