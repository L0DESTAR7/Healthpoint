import Realm, {BSON, ObjectSchema} from 'realm';
import { Meal } from './Meals';
import { Insuline } from './Insuline';
import { Hydration } from './Hydration';
import { PhysicalActivity } from './PhysicalActivity';


export class User extends Realm.Object<User> {
   _id!: BSON.ObjectId;
   firstName!: string;
   lastName!: string;
   age!: Number;
   meals!: Realm.List<Meal>;
   Insulines!: Realm.List<Insuline>;
   Hydration!: Realm.List<Hydration>;
   PhysicalActivity!: Realm.List<PhysicalActivity>;
 
   static schema : ObjectSchema = {
     name: 'User',
     properties : {
       _id: 'objectId',
       firstName: 'string',
       lastName: 'string',
       age: 'int',
       meals: 'Meal[]'
     },
     primaryKey: '_id'
   }
}