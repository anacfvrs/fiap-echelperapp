import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  menuSection: {
    marginBottom: 20,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  menuItemText: {
    fontSize: 14,
    marginLeft: 10,
  },
  menuItemIcon: {
    fontSize: 20,
    color: '#888',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  socialIcon: {
    fontSize: 24,
    marginHorizontal: 10,
    color: '#888',
  },
});
