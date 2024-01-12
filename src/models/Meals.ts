import Realm, {BSON, ObjectSchema} from 'realm';
import { Portion } from './Portion';

export class Meal extends Realm.Object<Meal> {
    name!: string;
    portions?: Realm.List<Portion>;

    static schema : ObjectSchema = {
        name : "Meal",
        embedded: true,
        properties: {
          name: 'string',
          portions: "Portion[]"
        }
    }
}