import {FindOperator} from "../FindOperator";

/**
 * Find Options Operator.
 * Example: { someField: MoreThan(10) }
 */
export function MoreThanEqual<T>(value: T|FindOperator<T>) {
    return new FindOperator("moreThanEqual", value);
}