import { foo, bar } from "./index"
import { funcFromSubDir } from "./src/index"

export const foo2 = foo();
export const bar2 = bar();
export const f = funcFromSubDir()