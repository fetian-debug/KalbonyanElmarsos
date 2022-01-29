const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51KLcSOFSRwTmjgjdxKMwQsaGekL71o8kEVxR6YCz0HfGlONtP6A2o2YeCwLGiqXaguBwKho5c0zpFabRnagGjeVI00LllJGAOK",
  SENTRY_DSN: "https://35b77be8d6e040f185af088fbf3327be@o1126845.ingest.sentry.io/6168296",
  // Backend config
  s3: {
    REGION: process.env.REACT_APP_REGION,
    BUCKET: process.env.REACT_APP_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_REGION,
    URL: process.env.REACT_APP_API_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  },
};

export default config;
