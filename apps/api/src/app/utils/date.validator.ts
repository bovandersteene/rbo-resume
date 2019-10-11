import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator';
import { isValid } from 'date-fns';

export function IsDateCustom(property: string, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [property],
      validator: IsDateCustomConstraint
    });
  };
}

@ValidatorConstraint({ name: "IsDateCustom" })
export class IsDateCustomConstraint implements ValidatorConstraintInterface {

  validate(value: any, args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints;
    const relatedValue = (args.object as any)[relatedPropertyName];
    return !value || typeof value === "string" &&
      typeof relatedValue === "string" &&
      isValid(new Date(value));
  }

}
