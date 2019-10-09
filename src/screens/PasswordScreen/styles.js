import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  containerLogo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  containerForm: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 128,
    height: 128,
    marginBottom: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    height: 50,
    width: '100%',
    fontSize: 18,
    paddingLeft: 8,
  },
  buttonsContainer: {
    width: '100%',
  },
  button: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7159c1',
    borderRadius: 2,
    marginBottom: 8,
  },
  buttonLabel: {
    fontSize: 16,
    color: '#FFF',
  },
  headerLabel: {
    fontSize: 18,
  },
});

export default styles;
