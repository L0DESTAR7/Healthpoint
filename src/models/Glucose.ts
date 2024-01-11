import { Decimal128 } from "mongodb";
import { BSON, ObjectSchema } from "realm";
import { User } from "./User";

export class Glucose extends Realm.Object<Glucose> {

    _id!: BSON.ObjectId;
    date!: Date;
    value!: string;
    unit!: string;
    User!: User;

    static schema: ObjectSchema = {
        name: 'Glucose',
        properties: {
            _id: 'objectId',
            date: 'date',
            value: 'string',
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