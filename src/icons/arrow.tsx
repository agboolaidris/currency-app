import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
interface Props {
  color: string;
  size: number;
}
export function RiseIcon({color, size}: Props) {
  return (
    <Svg width={100} height={20} viewBox="0 0 20 12" fill="none">
      <Path
        d="M11 1h8m0 0v8m0-8l-8 8-4-4-6 6"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
