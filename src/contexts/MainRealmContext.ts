import { createRealmContext } from "@realm/react";
import { User } from "../models/User";
import { Glucose } from "../models/Glucose";
import { Meal } from "../models/Meals";
import { PhysicalActivity } from "../models/PhysicalActivity";
import { Hydration } from "../models/Hydration";
import { Portion } from "../models/Portion";
import { Reminder } from "../models/Reminder";
import { Ingredient } from "../models/Ingredient";
import { Insuline } from "../models/Insuline";

export const mainRealmContext = createRealmContext({
    schema: [User, Meal, Portion, Ingredient, Glucose, Insuline, Hydration, Reminder, PhysicalActivity]
  });

  
