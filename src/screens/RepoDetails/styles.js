import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    paddingRight: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 32,
  },
  list: {
    paddingHorizontal: 16,
  },
  listItem: {
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    width: '80%',
    borderRadius: 4,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default styles;
