import defaultFixtures from "./default.f";
import allFixtures from "./all.f";
import chatFixtures from "./chat.f";

import test from "@playwright/test"

console.log(chatFixtures)

export const allF = test.extend(allFixtures)
export const defaultF = test.extend(defaultFixtures)
export const chatF = test.extend(chatFixtures)


export const expect = allF.expect