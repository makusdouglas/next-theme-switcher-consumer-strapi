import { useCookies } from "react-cookie";
import { selector } from "recoil";
import { colorModeAtom } from "../../atoms/ColorMode";

const getColorMode = selector({
    key: 'getColorModeState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      return get(colorModeAtom);
        
    },
  });

  export { getColorMode }