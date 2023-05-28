import { ButtonVariant, Colors } from '.';

export function retrieveButtonColor(variant?: ButtonVariant): Colors {
  switch (variant) {
    default:
    case 'primary':
      return {
        backgroundColor: '#0050e6',
        textColor: '#ffffff'
      };
    case 'secondary':
      return {
        backgroundColor: '#709cef',
        textColor: '#0050e6'
      };
    case 'text':
      return {
        backgroundColor: '#ffffff',
        textColor: '#0050e6'
      };
  }
}
