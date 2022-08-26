## Resume Experience Block
These are custom blocks as a variation on columns block. They have some preset values and layout, but didn't require a full on custom block. 

### Block description
This block appears to be a full on block, but it's only a (block variation)[https://github.com/circlecube/evans-block-theme/blob/main/block-variations/resume-experience.js] of a column block. It has preset some innerblocks to keep formatting consistent. There are also some custom (styles)[https://github.com/circlecube/evans-block-theme/blob/main/block-variations/_resume-experience.scss] in place.


### Block markup
```
<!-- wp:columns {"verticalAlignment":"top","className":"resume-experience-block"} -->
<div class="wp-block-columns are-vertically-aligned-top resume-experience-block"><!-- wp:column {"verticalAlignment":"top","width":"50%"} -->
<div class="wp-block-column is-vertically-aligned-top" style="flex-basis:50%"><!-- wp:heading {"placeholder":"Company","className":"job-company"} -->
<h2 class="job-company">The Company</h2>
<!-- /wp:heading -->

<!-- wp:heading {"level":3,"placeholder":"Location","className":"job-location"} -->
<h3 class="job-location">Remote</h3>
<!-- /wp:heading -->

<!-- wp:heading {"level":4,"placeholder":"From – To","className":"job-dates"} -->
<h4 class="job-dates">2019 - 2022</h4>
<!-- /wp:heading --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"top","width":"50%"} -->
<div class="wp-block-column is-vertically-aligned-top" style="flex-basis:50%"><!-- wp:heading {"level":3,"placeholder":"Job Title","className":"job-title"} -->
<h3 class="job-title">The Official Job Title</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"placeholder":"Job Description","className":"job-description"} -->
<p class="job-description">Some relevant description of the position.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->
```

### Block example
View an example with other (blocks)[https://evanmullins.com/blocks/].