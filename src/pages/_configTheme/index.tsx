import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { getColorMode } from '../../Recoil/selectors/getColorMode';
import { darkTheme, lightTheme } from '../../styles/theme';

const _ConfigTheme: React.FC = ({children}) => {
const isDarkMode = useRecoilValue(getColorMode)


  const currentTheme = isDarkMode ? darkTheme : lightTheme
  return (
      <ThemeProvider theme={currentTheme}>
      {children}     
    </ThemeProvider>
     
  );
}

export default _ConfigTheme;
