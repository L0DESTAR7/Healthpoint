import { Decimal128 } from "mongodb";
import { BSON, ObjectSchema } from "realm";

export class Hydration extends Realm.Object<Hydration> {
    
    _id!: BSON.ObjectId;
    date!: Date;
    amount!: Decimal128;
    unit!: string;

    static schema: ObjectSchema = {
        name: "Hydration",
        properties: {
            _id: "objectId",
            date: "date",
            amount: "decimal128",
            unit: "string",

            User: {
              type: 'linkingObjects',
              objectType: 'User',
              property: 'Hydration'
            }
        },
        primaryKey: "_id"
    }
}