import * as ejs from 'ejs';
import { StoryDirectory } from '../types';

var DIRECTORY_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Stories</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<style>
.previewImg {
    max-width: 300px;
}
</style>
<body>

<div class="container">
  <h1>Stories</h1>

  <% stories.forEach(function(story){ %>
    
    <h2><a href="<%= story.name %>/index.html"><%= story.name %></a></h2>
    <p>
      <%= story.prompt %>
    </p>

  <% }); %>

</div>

</body>
</html>
`;

export function produceStoryDirectoryHtml(storyDirectory: StoryDirectory)
{
    const html = ejs.render(
        DIRECTORY_TEMPLATE,
        storyDirectory
    );

    return html;
}
