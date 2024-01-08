import { Decimal128 } from "mongodb";
import { BSON, ObjectSchema } from "realm";

export class Insuline extends Realm.Object<Insuline> {
    _id!: BSON.ObjectId;
    date!: Date;
    value!: Decimal128;
    type!: string;

    static schema: ObjectSchema = {
        name: 'Insuline',
        properties: {
          _id: 'objectId',
          date: 'date',
          value: 'decimal128',
          type: 'string',
          User: {
            type: 'linkingObjects',
            objectType: 'User',
            property: 'Insulines'
          }
          
        },
        primaryKey: '_id'
    }
}