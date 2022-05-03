export interface IUser {
  token?: string;
  _id: string;
  name: string;
  phone: string;
  brand?: { name?: string; imageUrl?: string };
  disabled: boolean;
  messages: string[];
  createdAt: Date;
  updatedAt?: Date;
}
