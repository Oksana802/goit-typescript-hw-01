type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser<T extends Partial<User>>(userData: T): T {
  return userData;
}

const user = createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
