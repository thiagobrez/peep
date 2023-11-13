const reactNavigationTheme = {
  dark: true,
  colors: {
    primary: 'rgb(241,102,78)',
    background: 'rgb(0, 0, 0)',
    card: 'rgb(0, 0, 0)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(35,35,35)',
    notification: 'rgb(255,70,70)',
  },
};

const theme = {
  colors: {
    ...reactNavigationTheme.colors,
    black: '#000000',
    white: '#FFFFFF',
    disabled: 'rgba(255,255,255,0.3)',
    danger: 'rgb(255,70,70)',
  },
};

export { reactNavigationTheme, theme };
