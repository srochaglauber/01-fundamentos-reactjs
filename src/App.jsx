import { useState } from "react";

import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Post
        author="Glauber Rocha"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nostrum atque animi! Minus, repudiandae voluptatem provident, aspernatur totam ex quisquam necessitatibus eos molestiae quidem nihil? Blanditiis officia vero eum laboriosam?"
      />

      <Post
        author="Henry David Thoreau"
        content="O homem mais rico é aquele cujos prazeres são mais baratos."
      />
    </div>
  );
}
