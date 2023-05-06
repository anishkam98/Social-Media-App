import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  loginLogo: {
    width:500,
    height:500,
    marginLeft:50,
    marginRight:50,
    marginTop:0,
  },
  loginLogoContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginTitle: {
    flex: 1,
    position: 'absolute',
    zIndex: 999,
    elevation: 999,
    backgroundColor: 'white',
    padding:5,
    border: 1,
    borderRadius:5

  },
  titleText: {
    color: 'red',
    fontSize: 50,
    
  }
});

export { styles }