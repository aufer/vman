export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

export class User {
  constructor(
    id: any,
    givenName: string,
    familyName: string,
    email: string,
    role: UserRole,
    createdAt?: Date,
    updatedAt?: Date,
    picture?: string,
  ) {}
}
