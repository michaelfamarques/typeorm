import {FindOperator} from "../FindOperator";

/**
 * Find Options Operator.
 * Example: { someField: LessThanEqual(10) }
 */
export function LessThanEqual<T>(value: T|FindOperator<T>) {
    return new FindOperator("lessThanEqual", value);
}