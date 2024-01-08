import { Decimal128 } from "mongodb";
import { BSON, ObjectSchema } from "realm";

export class PhysicalActivity extends Realm.Object<PhysicalActivity> {

    _id!: BSON.ObjectId;
    date!: Date;
    activity!: string;
    duration!: Decimal128;
    intensity!: string;

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
                property: 'User'
            }
        },

        primaryKey: '_id'
    }
}