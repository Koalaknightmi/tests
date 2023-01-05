import defaultFixtures from "./default.f"
import { chatTestPage } from "./pages/specific/chat.p"

const allFixtures = {
    chatPage: async ({page}, use) => {
        await use(new chatTestPage(page))
    },
    ...defaultFixtures
}

export default allFixtures