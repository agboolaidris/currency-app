import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
interface TimeIconProps extends SvgProps {
  color: string;
}
const TimeIcon = (props: TimeIconProps) => (
  <Svg fill="none" stroke={props.color} viewBox="0 0 24 24" {...props}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </Svg>
);

export default TimeIcon;
