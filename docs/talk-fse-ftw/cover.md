## Cover Block
Simply use a cover block to give some easy nicely formatted content on your site. It's a simple and modern way to start a site with a landing page or panel.

### Block description
Cover block with a background image and some simple content.

### Block markup
```
<!-- wp:cover {"url":"....jpg","id":8026,"dimRatio":20,"overlayColor":"dark-cyan-blue","minHeight":90,"minHeightUnit":"vh","isDark":false,"align":"full"} -->
<div class="wp-block-cover alignfull is-light" style="min-height:90vh"><span aria-hidden="true" class="wp-block-cover__background has-dark-cyan-blue-background-color has-background-dim-20 has-background-dim"></span><img class="wp-block-cover__image-background wp-image-8026" alt="" src="....jpg" data-object-fit="cover"/><div class="wp-block-cover__inner-container"><!-- wp:group {"layout":{"inherit":true}} -->
<div class="wp-block-group"><!-- wp:heading {"level":1,"style":{"typography":{"textTransform":"uppercase","fontStyle":"normal","fontWeight":"300","letterSpacing":"1px"}},"fontSize":"x-large"} -->
<h1 class="has-x-large-font-size" style="font-style:normal;font-weight:300;text-transform:uppercase;letter-spacing:1px">Welcome</h1>
<!-- /wp:heading -->

<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button {"backgroundColor":"vivid-purple","textColor":"off-white","style":{"border":{"radius":"100px"}},"className":"is-style-fill","fontSize":"medium"} -->
<div class="wp-block-button has-custom-font-size is-style-fill has-medium-font-size"><a class="wp-block-button__link has-off-white-color has-vivid-purple-background-color has-text-color has-background" style="border-radius:100px">Click Here</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->
```

### Block example
https://evanmullins.com/cover/