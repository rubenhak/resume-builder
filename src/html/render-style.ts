import * as ejs from 'ejs';
import { RenderStyleInfo, StoryPackage } from '../types';

var RENDER_INFO_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <title><%= storyPackage.storyInfo.name %> / <%= storyPackage.name %> / <%= renderInfo.name %></title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<style>
.previewImg {
    max-width: 100%;
}
</style>
<body>

<div class="container">
  <h1><%= storyPackage.storyInfo.name %> / <%= storyPackage.name %> / <%= renderInfo.name %></h1>
  <p>Dir: <%= renderInfo.dir %></p>
  <p>
  <a href="../../index.html">back to story package</a>
  </p>

  <% renderInfo.sentences.forEach(function(sentence){ %>
    
    <h2><%= sentence.id %></h2>
    <p><%= sentence.prompt %></p>

    <% sentence.images.forEach(function(image){ %>

        <img src="<%= image.path %>" class="previewImg" />

    <% }); %>

  <% }); %>

</div>

</body>
</html>
`;

export function produceRenderStyleHtml(renderInfo: RenderStyleInfo, storyPackage: StoryPackage)
{
    const html = ejs.render(
        RENDER_INFO_TEMPLATE,
        {
          storyPackage: storyPackage,
          renderInfo: renderInfo,
        }
    );

    return html;
}
