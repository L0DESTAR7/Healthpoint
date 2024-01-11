import { Decimal128 } from 'mongodb';
import Realm, {BSON, ObjectSchema} from 'realm';

export class Ingredient extends Realm.Object {
    _id!: BSON.ObjectId;
    name!: string;
    protein!: Decimal128;
    fat!: Decimal128;
    calories!: Decimal128

    static schema: ObjectSchema = {
        name: 'Ingredient',
        properties: {
            _id: 'objectId',
            name: 'string',
            protein: 'decimal128',
            fat: 'decimal128',
            calories: 'decimal128'
        },
        primaryKey: '_id'
    }
}