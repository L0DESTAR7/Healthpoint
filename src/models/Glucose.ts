import { BSON, ObjectSchema } from "realm";
import { User } from "./User";

export class Glucose extends Realm.Object<Glucose> {

  _id!: BSON.ObjectId;
  date!: Date;
  value!: Number;
  unit!: string;
  User!: User;

  static schema: ObjectSchema = {
    name: 'Glucose',
    properties: {
      _id: 'objectId',
      date: 'date',
      value: 'int',
      unit: 'string',

      User: {
        type: 'linkingObjects',
        objectType: 'User',
        property: 'Glucoses'
      }
    },

    primaryKey: '_id'
  }
}
