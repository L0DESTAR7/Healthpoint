import Realm, { BSON, ObjectSchema } from 'realm';
import { Meal } from './Meals';
import { Insulin } from './Insulin';
import { Hydration } from './Hydration';
import { PhysicalActivity } from './PhysicalActivity';
import { Glucose } from './Glucose';
import { Reminder } from './Reminder';


export class User extends Realm.Object<User> {
  _id!: BSON.ObjectId;
  firstName!: string;
  lastName!: string;
  age!: Number;
  meals?: Realm.List<Meal>;
  Insulines?: Realm.List<Insulin>;
  Hydrations?: Realm.List<Hydration>;
  PhysicalActivity?: Realm.List<PhysicalActivity>;
  Glucoses?: Realm.List<Glucose>;
  Reminders?: Realm.List<Reminder>;

  static schema: ObjectSchema = {
    name: 'User',
    properties: {
      _id: 'objectId',
      firstName: 'string',
      lastName: 'string',
      age: 'int',
      meal: 'Meal[]',
      Insulines: 'Insulin[]',
      Glucoses: 'Glucose[]',
      Hydrations: 'Hydration[]',
      Reminders: 'Reminder[]',
      PhysicalActivity: 'PhysicalActivity[]'
    },
    primaryKey: '_id'
  }
}
