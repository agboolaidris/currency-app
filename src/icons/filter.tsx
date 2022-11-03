import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
interface IFilterIcon {
  size: number;
  color: string;
}
function FilterIcon({size, color}: IFilterIcon) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 14" fill="none">
      <Path
        d="M3 1a1 1 0 00-2 0v7.268a2 2 0 000 3.464V13a1 1 0 102 0v-1.268a2 2 0 000-3.464V1zM9 1a1 1 0 10-2 0v1.268a2 2 0 000 3.464V13a1 1 0 102 0V5.732a2 2 0 000-3.464V1zM14 0a1 1 0 011 1v7.268a2 2 0 010 3.464V13a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V1a1 1 0 011-1z"
        fill={color}
      />
    </Svg>
  );
}

export default FilterIcon;
