// Mock handlers - using direct axios mocking instead of MSW
// See test files for implementation

export const mockLoginSuccess = {
  token: "mock-jwt-token",
  user: {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    phone: "test@example.com",
  },
};

export const mockSignupSuccess = {
  token: "mock-jwt-token",
  user: {
    id: "new-user-id",
    name: "Test User",
    email: "test@example.com",
    phone: "+91 9876543210",
    dateOfBirth: "15/06/1995",
    placeOfBirth: "Delhi, India",
  },
};
