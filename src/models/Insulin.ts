import { BSON, ObjectSchema } from "realm";

export class Insulin extends Realm.Object<Insulin> {
  _id!: BSON.ObjectId;
  date!: Date;
  value!: Number;
  type!: string;
  unit!: string;

  static schema: ObjectSchema = {
    name: 'Insulin',
    properties: {
      _id: 'objectId',
      date: 'date',
      value: 'int',
      type: 'string',
      unit: 'string',
      User: {
        type: 'linkingObjects',
        objectType: 'User',
        property: 'Insulines'
      }

    },
    primaryKey: '_id'
  }
}
