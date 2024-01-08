import { Decimal128 } from "mongodb";
import { BSON, ObjectSchema } from "realm";

export class Reminder extends Realm.Object<Reminder> {

    _id!: BSON.ObjectId;
    date!: Date;
    value!: Decimal128;
    periodcity!: string;

    static schema: ObjectSchema = {
        name: 'Reminder',
        properties: {
            _id: 'objectId',
            date: 'date',
            value: 'decimal128',
            periodicity: 'string',

            User: {
                type: 'linkingObjects',
                objectType: 'User',
                property: 'User'
            }
        },

        primaryKey: '_id'
    }
}