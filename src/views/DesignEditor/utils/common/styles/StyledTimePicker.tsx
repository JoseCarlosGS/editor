import { styled } from 'baseui';

const StyledTimePicker = styled('div', ({ $theme }) => ({
  width: '100%',
  padding: '8px 12px',
  borderRadius: $theme.borders.radius200,
  border: `1px solid ${$theme.colors.inputBorder}`,
  backgroundColor: $theme.colors.inputFill,
  boxShadow: $theme.lighting.shadow400,
  display: 'flex',
  alignItems: 'center',
  transition: 'border 0.2s ease',

  // Focus styles (imitando el input de BaseWeb)
  '&:focus-within': {
    borderColor: $theme.colors.accent,
    boxShadow: `0 0 0 2px ${$theme.colors.accent50}`,
  },

  // Internals: input fields inside TimePicker
  '.react-time-picker__inputGroup': {
    display: 'flex',
    gap: '4px',
    alignItems: 'center',
  },

  '.react-time-picker__inputGroup__input': {
    border: 'none',
    background: 'transparent',
    fontSize: $theme.typography.font300.fontSize,
    color: $theme.colors.contentPrimary,
    width: '2.5em',
    textAlign: 'center',
    outline: 'none',
    padding: '0',
  },

  '.react-time-picker__inputGroup__divider': {
    color: $theme.colors.contentTertiary,
    margin: '0 2px',
  },

  '.react-time-picker__button': {
    display: 'none', // Oculta el ícono del reloj y la X
  },
}));

export default StyledTimePicker;