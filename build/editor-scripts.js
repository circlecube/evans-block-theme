/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./block-variations/index.js":
/*!***********************************!*\
  !*** ./block-variations/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resume_experience__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resume-experience */ "./block-variations/resume-experience.js");
// main resume block to list experience
// TODO: add logo image
 // TODO:
// compare/contrast the approaches.
// build resume experience as a block pattern
// build resume experience as a block variation
// build resume experience as a custom block
// resume-skills
// as a ul (with class) for now CSS only, but could rebuild as a block... or just a block style?

/***/ }),

/***/ "./block-variations/resume-experience.js":
/*!***********************************************!*\
  !*** ./block-variations/resume-experience.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Registers a new block variation provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-blocks/#registerBlockVariation
 */

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * Variation content
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockVariation)('core/columns', {
  name: 'resume-experience',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Resume Experience', 'evans-block-theme'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add experience to resume.', 'evans-block-theme'),
  category: 'evans-block-theme',
  scope: ['inserter'],
  attributes: {
    className: 'resume-experience-block',
    verticalAlignment: 'top'
  },
  icon: {
    src: 'id'
  },
  innerBlocks: [['core/column', {
    width: '50%',
    verticalAlignment: 'top'
  }, [['core/heading', {
    level: 2,
    placeholder: 'Company',
    className: 'job-company'
  }], ['core/heading', {
    level: 3,
    placeholder: 'Location',
    className: 'job-location'
  }], ['core/heading', {
    level: 4,
    placeholder: 'From – To',
    className: 'job-dates'
  }]]], ['core/column', {
    width: '50%',
    verticalAlignment: 'top'
  }, [['core/heading', {
    level: 3,
    placeholder: 'Job Title',
    className: 'job-title'
  }], ['core/paragraph', {
    placeholder: 'Job Description',
    className: 'job-description'
  }]]]]
});

/***/ }),

/***/ "./blocks/index.js":
/*!*************************!*\
  !*** ./blocks/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _talk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./talk */ "./blocks/talk/index.js");
/* harmony import */ var _skill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skill */ "./blocks/skill/index.js");
/* harmony import */ var _skills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills */ "./blocks/skills/index.js");
// Import each custom block




/***/ }),

/***/ "./blocks/skill/edit.js":
/*!******************************!*\
  !*** ./blocks/skill/edit.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);



/**
 * WordPress dependencies
 */



/**
 * Edit component.
 * See https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} props               The block props.
 * @param          props.isSelected
 * @param          props.attributes
 * @param          props.setAttributes
 * @return {Function} Render the edit screen
 */

const Edit = _ref => {
  let {
    isSelected,
    attributes,
    setAttributes
  } = _ref;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: 'block-skill'
  });
  const {
    label,
    level
  } = attributes;

  const renderStars = num => {
    switch (num) {
      case '5':
        return '★★★★★';

      case '4':
        return '★★★★☆';

      case '3':
        return '★★★☆☆';

      case '2':
        return '★★☆☆☆';

      case '1':
        return '★☆☆☆☆';
    }
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("li", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "block-skill"
  }, blockProps), (isSelected || label) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Label text', 'evans-block-theme'),
    value: label,
    onChange: value => {
      setAttributes({
        label: value
      });
    },
    tagName: "strong",
    allowedFormats: [],
    className: "block-skill-label"
  }), isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    value: level,
    selected: "5",
    className: "block-skill-level block-skill-level-select",
    options: [{
      label: '★★★★★',
      value: '5'
    }, {
      label: '★★★★☆',
      value: '4'
    }, {
      label: '★★★☆☆',
      value: '3'
    }, {
      label: '★★☆☆☆',
      value: '2'
    }, {
      label: '★☆☆☆☆',
      value: '1'
    }],
    onChange: value => {
      setAttributes({
        level: value
      });
    }
  }), !isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("em", {
    className: "block-skill-level"
  }, renderStars(level)));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/skill/index.js":
/*!*******************************!*\
  !*** ./blocks/skill/index.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

var _block_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/skill/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./blocks/skill/block.json");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


 //  import './style.css';

/* Uncomment for CSS overrides in the admin */
// import './index.css';

/**
 * Register block
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__, { .../*#__PURE__*/ (_block_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache || (_block_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache = __webpack_require__.t(_block_json__WEBPACK_IMPORTED_MODULE_2__, 2))),
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: () => null
});

/***/ }),

/***/ "./blocks/skills/edit.js":
/*!*******************************!*\
  !*** ./blocks/skills/edit.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */


/**
 * Edit component.
 * See https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} props               The block props.
 * @param          props.isSelected
 * @param          props.attributes
 * @param          props.setAttributes
 * @return {Function} Render the edit screen
 */

const Edit = _ref => {
  let {
    isSelected,
    attributes,
    setAttributes
  } = _ref;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'block-skills is-style-resume_skills'
  });
  const ALLOWED = ['evans-block-theme/skill'];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
    allowedBlocks: ALLOWED
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/skills/index.js":
/*!********************************!*\
  !*** ./blocks/skills/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

var _block_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./blocks/skills/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./blocks/skills/block.json");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


 //  import './style.css';

/* Uncomment for CSS overrides in the admin */
// import './index.css';

/**
 * Register block
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__, { .../*#__PURE__*/ (_block_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache || (_block_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache = __webpack_require__.t(_block_json__WEBPACK_IMPORTED_MODULE_4__, 2))),
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: () => {
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save();
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./blocks/talk/edit.js":
/*!*****************************!*\
  !*** ./blocks/talk/edit.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */



/**
 * Edit component.
 * See https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} props               The block props.
 * @param          props.isSelected
 * @param          props.attributes
 * @param          props.setAttributes
 * @return {Function} Render the edit screen
 */

const Edit = _ref => {
  let {
    isSelected,
    attributes,
    setAttributes
  } = _ref;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'block-talk'
  });
  const {
    label,
    headline,
    description,
    slide_link,
    video_link,
    talk_link,
    image
  } = attributes;

  const onSelectImage = media => {
    setAttributes({
      image: media
    });
  };

  const removeMedia = () => {
    setAttributes({
      image: {}
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-talk-inner"
  }, (isSelected || label) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Label text', 'evans-block-theme'),
    value: label,
    onChange: value => {
      setAttributes({
        label: value
      });
    },
    tagName: "span",
    allowedFormats: [],
    className: "block-talk-label"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-talk-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Talk title', 'evans-block-theme'),
    value: headline,
    onChange: value => {
      setAttributes({
        headline: value
      });
    },
    tagName: "h2",
    allowedFormats: [],
    className: `block-talk-title`
  }), (isSelected || description) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-talk-desc"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Talk Description', 'evans-block-theme'),
    value: description,
    onChange: value => {
      setAttributes({
        description: value
      });
    },
    tagName: "p",
    allowedFormats: ['core/bold', 'core/italic']
  })), isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-talk-links"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, "Talk:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalLinkControl, {
    value: talk_link,
    onChange: value => {
      setAttributes({
        talk_link: value
      });
    },
    settings: []
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, "Slides:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalLinkControl, {
    value: slide_link,
    onChange: value => {
      setAttributes({
        slide_link: value
      });
    },
    settings: []
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, "Video:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalLinkControl, {
    value: video_link,
    onChange: value => {
      setAttributes({
        video_link: value
      });
    },
    settings: []
  }))), !isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-talk-links"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
    className: "block-talk-button-group"
  }, talk_link.url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    href: talk_link.url,
    variant: "primary",
    icon: "tickets",
    className: "block-talk-button"
  }, talk_link.title), slide_link.url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    href: slide_link.url,
    variant: "primary",
    icon: "slides",
    className: "block-talk-button"
  }, slide_link.title), video_link.url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    href: video_link.url,
    variant: "primary",
    icon: "video-alt",
    className: "block-talk-button"
  }, video_link.title)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-talk-image-wrap"
  }, !isSelected && image.url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: image.url,
    className: "block-talk-image",
    alt: headline + ' talk thumbanil'
  }), !isSelected && !image.url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    icon: "megaphone",
    size: "200",
    className: "block-talk-image"
  }), isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    allowedTypes: ['image'],
    value: image.id,
    onSelect: onSelectImage,
    render: _ref2 => {
      let {
        open
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        isDefault: true,
        isLarge: true,
        className: !image.id ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
        onClick: open,
        icon: !image.id ? 'format-image' : '',
        title: !image.id ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Set Image', 'evans-block-theme') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Image Preview', 'evans-block-theme')
      }, !image.id ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Set Image', 'evans-block-theme') : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: image.url,
        className: "block-talk-image",
        alt: headline + ' talk thumbanil'
      }));
    }
  })), isSelected && image.id && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    allowedTypes: ['image'],
    value: image.id,
    onSelect: onSelectImage,
    render: _ref3 => {
      let {
        open
      } = _ref3;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        isDefault: true,
        isLarge: true,
        className: "block-talk-image-replace",
        onClick: open,
        icon: "edit",
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Replace Image', 'evans-block-theme')
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    isLarge: true,
    isDestructive: true,
    className: "block-talk-image-remove",
    onClick: removeMedia,
    icon: "trash",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Remove image', 'evans-block-theme')
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/talk/index.js":
/*!******************************!*\
  !*** ./blocks/talk/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

var _block_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/talk/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./blocks/talk/block.json");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


 //  import './style.css';

/* Uncomment for CSS overrides in the admin */
// import './index.css';

/**
 * Register block
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__, { .../*#__PURE__*/ (_block_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache || (_block_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache = __webpack_require__.t(_block_json__WEBPACK_IMPORTED_MODULE_2__, 2))),
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: () => null
});

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./blocks/skill/block.json":
/*!*********************************!*\
  !*** ./blocks/skill/block.json ***!
  \*********************************/
/***/ (function(module) {

module.exports = JSON.parse('{"apiVersion":2,"title":"Skill","description":"Block for resume skill","text-domain":"evans-block-theme","name":"evans-block-theme/skill","icon":"star-half","category":"evans-block-theme","parent":["evans-block-theme/skills"],"attributes":{"label":{"type":"string"},"level":{"type":"string"}},"supports":{"html":false},"example":false,"editorScript":"file:../../build/editor-scripts.js","editorStyle":"file:../../build/editor-styles.css"}');

/***/ }),

/***/ "./blocks/skills/block.json":
/*!**********************************!*\
  !*** ./blocks/skills/block.json ***!
  \**********************************/
/***/ (function(module) {

module.exports = JSON.parse('{"apiVersion":2,"title":"Skills","description":"Block for resume skills","text-domain":"evans-block-theme","name":"evans-block-theme/skills","icon":"star-half","category":"evans-block-theme","attributes":{"label":{"type":"string"},"level":{"type":"string"}},"supports":{"html":false},"example":false,"editorScript":"file:../../build/editor-scripts.js","editorStyle":"file:../../build/editor-styles.css"}');

/***/ }),

/***/ "./blocks/talk/block.json":
/*!********************************!*\
  !*** ./blocks/talk/block.json ***!
  \********************************/
/***/ (function(module) {

module.exports = JSON.parse('{"apiVersion":2,"title":"Talk","description":"Block for WordCamp speaking experience","text-domain":"evans-block-theme","name":"evans-block-theme/talk","icon":"megaphone","category":"evans-block-theme","attributes":{"label":{"type":"string"},"headline":{"type":"string"},"description":{"type":"string"},"talk_link":{"type":"object","default":{"title":"Talk","url":null}},"slide_link":{"type":"object","default":{"title":"Slides","url":null}},"video_link":{"type":"object","default":{"title":"Video","url":null}},"image":{"type":"object","default":{"id":null,"url":null}}},"supports":{"html":false},"example":{"attributes":{"headline":"A Talk Title","label":"WordCamp Anywhere 2020","description":"A short description of the talk.","slide_link":{"title":"Slides","url":"https://slideshare.net/"},"image":{"url":"https://s.w.org/images/core/5.3/MtBlanc1.jpg"}}},"editorScript":"file:../../build/editor-scripts.js","editorStyle":"file:../../build/editor-styles.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	!function() {
/******/ 		var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; }; });
/******/ 			}
/******/ 			def['default'] = function() { return value; };
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_variations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../block-variations */ "./block-variations/index.js");
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blocks */ "./blocks/index.js");
// Import block variations
 // Import custom blocks


}();
/******/ })()
;
//# sourceMappingURL=editor-scripts.js.map