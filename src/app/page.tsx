import Category from "@/components/Category";
import { Text } from "@/components/retroui/Text";
import { musicWebsites } from "./data/music";
import { readingWebsites } from "./data/reading";
import { podcastsWebsites } from "./data/podcast";

export default function Home() {

  return (
    <div>
      {/* <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"> */}
      <main className="container mx-auto p-8">
        <Text as="h4">
          List of websites to waste time when there's nothing to scroll.
      </Text>
      <Category name="Music" websites={musicWebsites} />
      <Category name="Reading" websites={readingWebsites} />
      <Category name="Podcasts" websites={podcastsWebsites} />
    </main> 
    </div>
  );
}
