import Octicons from '@expo/vector-icons/Octicons';

export function getIconForRoute(routeName: string) {
  let iconName: keyof typeof Octicons.glyphMap;

  switch (routeName) {
    case 'Drafts':
      iconName = 'pencil';
      break;
    case 'Settings':
      iconName = 'gear';
      break;
    default:
      break;
  }

  return iconName;
}
