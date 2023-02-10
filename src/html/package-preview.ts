import * as ejs from 'ejs';
import { StoryDetails, StoryPackage } from '../types';

var STORY_INFO_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <title><%= storyInfo.name %> / <%= name %></title>
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
  <h1><%= storyInfo.name %> / <%= name %></h1>
  <p>
  <a href="../index.html">back to story</a>
  </p>

  <p>
    <%= storyText %>
  </p>

  <% renderStyles.forEach(function(renderStyle){ %>
    
    <h2><a href="<%= renderStyle.dir %>/preview.html"><%= renderStyle.name %></a></h2>
    
    <div>
      <% renderStyle.sentences.forEach(function(sentence){ %>
      
        <% sentence.previewImages.forEach(function(image){ %>
    
            <img src="<%= renderStyle.dir %>/<%= image %>" class="previewImg" />
    
        <% }); %>
    
      <% }); %>
    </div>

  <% }); %>

</div>

</body>
</html>
`;

export function produceStoryPackageIndexHtml(storyPackage: StoryPackage)
{
    const html = ejs.render(
        STORY_INFO_TEMPLATE,
        storyPackage
        
    );

    return html;
}
