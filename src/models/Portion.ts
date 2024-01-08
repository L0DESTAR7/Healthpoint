import { BSON, ObjectSchema } from "realm";
import { Ingredient } from "./Ingredient";
import { Decimal128 } from "mongodb";

export class Portion extends Realm.Object {
  unit!:string;
  quantity!: Decimal128;
  ingredient!: Ingredient

  static schema : ObjectSchema = {
    name: 'Portion',
    embedded: true,
    properties: {
        unit: 'string',
        quantity: 'decimal128',
        ingredient: 'Ingredient'
    }
  }
}