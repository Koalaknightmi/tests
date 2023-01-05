import defaultFixtures from "./default.f"
import { chatTestPage } from "./pages/specific/chat.p"

const chatFixtures = {
    chatPage: async ({page}, use) => {
        await use(new chatTestPage(page))
    },
    ...defaultFixtures
}

export default chatFixtures