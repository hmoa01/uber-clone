export default {
  expo: {
    splash: {
      image: './assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#fefaf4',
    },
    android: {
      package: 'com.hmoa.uberclone', // Replace with your unique package name
    },
    extra: {
      eas: {
        projectId: 'ead8c21d-9f79-4c6e-a498-26dcf4eb2ee8', // Your EAS project ID
      },
    },
  },
};
