## Resume Skill Block
A custom block in the theme that lists skills and stars. This could be useful if you want a visual on a resume for example.

### Block description
View the block source code in the theme at (evans-block-theme/blocks/skills)[https://github.com/circlecube/evans-block-theme/tree/main/blocks/skills] and (evans-block-theme/blocks/skill)[https://github.com/circlecube/evans-block-theme/tree/main/blocks/skill]. Notice that there is a skills block as well as a skill block. The skills contains skills (so you can list as many as you would like). The skills is just a container, and each individual skill has only a label and a level. You enter a label and select from a dropdown how many stars you equate to that skill. 

### Block markup
```
<!-- wp:evans-block-theme/skills {"label":"Here's a skill","level":"stars here"} -->
<div class="wp-block-evans-block-theme-skills"><!-- wp:evans-block-theme/skill {"label":"WordPress","level":"5"} /-->

<!-- wp:evans-block-theme/skill {"label":"Javascript","level":"5"} /-->

<!-- wp:evans-block-theme/skill {"label":"PHP","level":"4"} /--></div>
<!-- /wp:evans-block-theme/skills -->
```

### Block example
View an example with other (blocks)[https://evanmullins.com/blocks/].