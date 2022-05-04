# Inner Blocks

Blocks are meant to be combined in different ways. Blocks are hierarchical in that a block can be nested within another block. Blocks can be nested within other blocks at multiple (and sometimes rather complex) levels. Nested blocks and its container are also called children and parent respectively. 

For example, a Columns block can be the parent block to multiple child blocks in each of its columns. We interface with this parent/child relationship via innerBlocks API. In the render function for example we’ll reference `InnerBlocks` to place and render the children of the block.

InnerBlocks can be further controlled and specified with `allowedBlocks` properties and `templated` to initialize as certain blocks and even `lock` the template from any changes.


### Further Reading
- https://developer.wordpress.org/block-editor/explanations/architecture/key-concepts/#composability
- https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/nested-blocks-inner-blocks/
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
- ***InnerBlocks***
- [Block Variations](11-block-variations.md)
- [Block Transforms](12-block-transforms.md)
- [Block Supports](13-block-supports.md)
- [Widget Blocks](14-widget-blocks.md)
- [Block Patterns](15-block-patterns.md)
- [Block Template](16-block-template.md)
- [Block-Based Themes](17-block-based-themes.md)
- [Block Templates](18-block-templates.md)
- [Block Template Parts](19-block-template-parts.md)
- [Blocks Deeply](20-blocks-deeply.md)