import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  searchContainer: {
    backgroundColor: '#FFF',
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
  searchInput: {
    backgroundColor: '#eee',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  list: {
    paddingHorizontal: 16,
  },
  listItem: {
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  itemDescription: {
    paddingVertical: 32,
  },
});

export default styles;
