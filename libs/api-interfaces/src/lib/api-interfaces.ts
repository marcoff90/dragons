import { InferAttributes, InferCreationAttributes, Model } from 'sequelize';

export interface ClassI
  extends Model<InferAttributes<ClassI>, InferCreationAttributes<ClassI>> {
  id: number;
  name: string;
  image: string;
}

export interface DragonI
  extends Model<InferAttributes<DragonI>, InferCreationAttributes<DragonI>> {
  id: number;
  heads: number;
  name: string;
  attack: number;
  speed: number;
  armor: number;
  firepower: number;
  shotLimit: number;
  venom: number;
  jawStrength: number;
  stealth: number;
  intro: string;
  about: string;
  summary: string;
  profileImg: string;
  mainImg: string;
  heightImg: string | null;
  price: number;
  classId: number;
  speciesId: number;
}

export interface TeamsImageI
  extends Model<
    InferAttributes<TeamsImageI>,
    InferCreationAttributes<TeamsImageI>
  > {
  id: number;
  image: string;
}

export interface SpeciesI
  extends Model<InferAttributes<SpeciesI>, InferCreationAttributes<SpeciesI>> {
  id: number;
  species: string;
}

export type DragonsInput = {
  heads?: number;
  classId?: number;
  speciesId?: number;
};

export type LimitOffset = {
  limit?: number;
  offset?: number;
};

export interface UserI
  extends Model<InferAttributes<UserI>, InferCreationAttributes<UserI>> {
  id: number;
  email: string;
  password: string;
  passwordConfirmation?: string;
}

export type UserResponseI = {
  id: number;
  email: string;
  token?: string;
};

export interface OrderI
  extends Model<InferAttributes<OrderI>, InferCreationAttributes<OrderI>> {
  id: number;
  userId: number;
  totalPrice: number;
  createdAt: number;
}

export interface OrderItemI
  extends Model<
    InferAttributes<OrderItemI>,
    InferCreationAttributes<OrderItemI>
  > {
  id: number;
  orderId: number;
  dragonId: number;
  amount: number;
  itemPrice?: number;
}
