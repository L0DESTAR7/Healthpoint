import DiabetesIcon from "../icons/DiabetesIcon";
import React from "react";
import FoodIcon from "../icons/FoodIcon";
import HydrationIcon from "../icons/HydrationIcon";
import ExerciceIcon from "../icons/ExerciceIcon";
import RemindersIcon from "../icons/RemindersIcon";
import { IconProps } from "../types/IconProps";


export default function IconProvider(props: IconProps) {

  switch (props.label) {
    case "Diabetes": {
      return (
        <DiabetesIcon isActive={props.isActive}></DiabetesIcon>
      );
    }
    case "Nutrition": {
      return (
        <FoodIcon isActive={props.isActive}></FoodIcon>
      )
    }
    case "Hydration": {
      return (
        <HydrationIcon isActive={props.isActive}></HydrationIcon>
      )
    }
    case "Exercice": {
      return (
        <ExerciceIcon isActive={props.isActive}></ExerciceIcon>
      )
    }
    case "Reminders": {
      return (
        <RemindersIcon isActive={props.isActive}></RemindersIcon>
      )
    }
  }
}
