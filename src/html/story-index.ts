import * as ejs from 'ejs';
import { StoryDetails } from '../types';

var STORY_INFO_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <title><%= name %></title>
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
  <h1><%= name %></h1>
  <p>
  <a href="../index.html">back to directory</a>
  </p>

  <p>
    <%= prompt %>
  </p>

  <% packages.forEach(function(storyPackage){ %>

    <h2>
      <a href="<%= storyPackage.name %>/index.html">
        <%= storyPackage.name %>
      </a>
    </h2>

    <p>
      <%= storyPackage.storyText %>
    </p>

    <% storyPackage.renderStyles.forEach(function(renderStyle){ %>
      
      <h3><a href="<%= storyPackage.name %>/<%= renderStyle.dir %>/preview.html"><%= renderStyle.name %></a></h3>
      
      <div>
        <% renderStyle.sentences.forEach(function(sentence){ %>
        
          <% sentence.previewImages.forEach(function(image){ %>
      
              <img src="<%= storyPackage.name %>/<%= renderStyle.dir %>/<%= image %>" class="previewImg" />
      
          <% }); %>
      
        <% }); %>
      </div>

    <% }); %>

  <% }); %>

</div>

</body>
</html>
`;

export function produceStoryIndexHtml(storyInfo: StoryDetails)
{
    const html = ejs.render(
        STORY_INFO_TEMPLATE,
        storyInfo
    );

    return html;
}
