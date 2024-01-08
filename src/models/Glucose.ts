import { Decimal128 } from "mongodb";
import { BSON, ObjectSchema } from "realm";

export class Glucose extends Realm.Object<Glucose> {

    _id!: BSON.ObjectId;
    date!: Date;
    value!: Decimal128;
    unit!: string;

    static schema: ObjectSchema = {
        name: 'Glucose',
        properties: {
            _id: 'objectId',
            date: 'Date',
            value: 'Decimal128',
            unit: 'string',

            User: {
                type: 'linkingObjects',
                objectType: 'User',
                property: 'User'
            }
        },
        
        primaryKey: '_id'
    }
}