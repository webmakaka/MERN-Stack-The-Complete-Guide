// const baseUrl =
//   process.env.NODE_ENV === 'production'
//     ? 'https://deployment-url.now.sh'
//     : 'https://mern-stack-app.dev';

// export default baseUrl;

const baseUrl =
  typeof window === 'undefined'
    ? 'http://172-17-0-2.kubernetes.default.svc.cluster.local'
    : 'https://mern-stack-app.dev';

export default baseUrl;
