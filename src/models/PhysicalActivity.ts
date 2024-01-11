import { Decimal128 } from "mongodb";
import { BSON, ObjectSchema } from "realm";
import { User } from "./User";

export class PhysicalActivity extends Realm.Object<PhysicalActivity> {

    _id!: BSON.ObjectId;
    date!: Date;
    activity!: string;
    duration!: Decimal128;
    intensity!: string;
    User!: User

    static schema: ObjectSchema = {
        name: 'PhysicalActivity',
        properties: {
            _id: 'objectId',
            date: 'date',
            activity: 'decimal128',
            duration: 'string',
            intensity: 'string',

            User: {
                type: 'linkingObjects',
                objectType: 'User',
                property: 'PhysicalActivity'
            }
        },

        primaryKey: '_id'
    }
}