# Block Template

Block templates allow specifying a default initial state for an editor session, we can set the initial state for a single block or the whole editor.

We can set a default block state dynamically or register a default for a whole post type. Templates can be declared in JS or in PHP as an array of blockTypes (block name and optional attributes). We can also nest blocks here and/or lock the template via the `templateLock` property. It's also possible to lock individual parts with the `lock` attribute on children.

Note: This is a block template, not to be confused with a [block theme template](18-block-templates.md).
## Examples
We can control the editor content for custom post types. Locking some templated blocks for example on a post type is the new way to give the CPT customizations that previously required a metabox library.
Another good place to use this when you may want a “custom block” but can compose it with existing core blocks, it could be saved as a pattern, but can also be saved as a block template - it can then be presented in the inserter as a block.

### Further Reading
- https://developer.wordpress.org/block-editor/reference-guides/block-api/block-templates/
### Contents
- [Overview](01-overview.md)
- [Block Vision](02-block-vision.md)
- [Block Basics](03-block-basics.md)
- [Block Markup](04-block-markup.md)
- [Core Blocks](05-core-blocks.md)
- [Custom Blocks](06-custom-blocks.md)
- [Dynamic Blocks](07-dynamic-blocks.md)
- [Block Styles](08-block-styles.md)
- [Reusable Blocks](09-reusable-blocks.md)
- [InnerBlocks](10-innerblocks.md)
- [Block Variations](11-block-variations.md)
- [Block Transforms](12-block-transforms.md)
- [Block Supports](13-block-supports.md)
- [Widget Blocks](14-widget-blocks.md)
- [Block Patterns](15-block-paterns.md)
- ***Block Template***
- [Block-Based Themes](17-block-based-themes.md)
- [Block Templates](18-block-templates.md)
- [Block Template Parts](19-block-template-parts.md)
- [Blocks Deeply](20-blocks-deeply.md)