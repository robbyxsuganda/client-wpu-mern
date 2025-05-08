export const environment = {
  API_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
  AUTH_SECRET: process.env.NEXTAUTH_SECRET || "your_auth_secret",
};
