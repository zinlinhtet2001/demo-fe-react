const config = {
    th: {
      apiUrl: process.env.REACT_APP_API_URL_TH, // API endpoint for Thailand
      language: "th",
      currency: "THB",
      welcomeMessage: "ยินดีต้อนรับ",
    },
    vn: {
      apiUrl: process.env.REACT_APP_API_URL_VN, // API endpoint for Vietnam
      language: "vi",
      currency: "VND",
      welcomeMessage: "Chào mừng",
    },
  };
  
  export default config;