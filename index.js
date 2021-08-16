import remarkPresetLintMarkdownStyleGuide from 'remark-preset-lint-markdown-style-guide'
import remarkPresetLintRecommended from 'remark-preset-lint-recommended'
import remarkLintEmphasisMarker from 'remark-lint-emphasis-marker'
import remarkLintListItemIndent from 'remark-lint-list-item-indent'
import remarkLintListItemSpacing from 'remark-lint-list-item-spacing'
import remarkLintFirstHeadingLevel from 'remark-lint-first-heading-level'
import remarkLintNoAutoLinks from '@stefanprobst/remark-lint-no-auto-links'
import remarkLintNoAutoLinkWithoutProtocol from 'remark-lint-no-auto-link-without-protocol'
import remarkLintNoEmptyUrl from 'remark-lint-no-empty-url'
import remarkLintValidateLinks from 'remark-validate-links'
import remarkLintFileExtension from 'remark-lint-file-extension'
import remarkLintNoFileNameArticles from 'remark-lint-no-file-name-articles'
import remarkLintNoFileNameIrregularCharacters from 'remark-lint-no-file-name-irregular-characters'
import remarkLintBlockquoteIndentation from 'remark-lint-blockquote-indentation'
import remarkLintCodeBlockStyle from 'remark-lint-code-block-style'
import remarkLintDefinitionCase from 'remark-lint-definition-case'
import remarkLintDefinitionSpacing from 'remark-lint-definition-spacing'
import remarkLintFencedCodeMarker from 'remark-lint-fenced-code-marker'
import remarkLintFinalNewline from 'remark-lint-final-newline'
import remarkLintHardBreakSpaces from 'remark-lint-hard-break-spaces'
import remarkLintHeadingStyle from 'remark-lint-heading-style'
import remarkLintLinkTitleStyle from 'remark-lint-link-title-style'
import remarkLintListItemBulletIndent from 'remark-lint-list-item-bullet-indent'
import remarkLintListItemContentIndent from 'remark-lint-list-item-content-indent'
import remarkLintMaximumLineLength from 'remark-lint-maximum-line-length'
import remarkLintNoBlockquoteWithoutMarker from 'remark-lint-no-blockquote-without-marker'
import remarkLintNoConsecutiveBlankLines from 'remark-lint-no-consecutive-blank-lines'
import remarkLintNoHeadingContentIndent from 'remark-lint-no-heading-content-indent'
import remarkLintNoInlinePadding from 'remark-lint-no-inline-padding'
import remarkLintNoTableIndentation from 'remark-lint-no-table-indentation'
import remarkLintOrderedListMarkerStyle from 'remark-lint-ordered-list-marker-style'
import remarkLintOrderedListMarkerValue from 'remark-lint-ordered-list-marker-value'
import remarkLintRuleStyle from 'remark-lint-rule-style'
import remarkLintStrongMarker from 'remark-lint-strong-marker'
import remarkLintTableCellPadding from 'remark-lint-table-cell-padding'
import remarkLintTablePipeAlignment from 'remark-lint-table-pipe-alignment'
import remarkLintTablePipes from 'remark-lint-table-pipes'
import remarkLintUnorderedListMarkerStyle from 'remark-lint-unordered-list-marker-style'

export default {
  settings: {
    bullet: '-',
    emphasis: '_',
    fences: true,
    incrementListMarker: true,
    listItemIndent: 'one',
    resourceLink: true,
    rule: '-',
    strong: '*',
  },
  plugins: [
    remarkPresetLintMarkdownStyleGuide,
    remarkPresetLintRecommended,
    // [remarkLintEmphasisMarker, '_'],
    // [remarkLintListItemIndent, 'space'],
    // [remarkLintListItemSpacing, { checkBlanks: true }],
    [remarkLintOrderedListMarkerValue, 'ordered'],
    [remarkLintFirstHeadingLevel, 2],
    remarkLintNoAutoLinks,
    [remarkLintNoAutoLinkWithoutProtocol, false],
    remarkLintNoEmptyUrl,
    remarkLintValidateLinks,
    [remarkLintFileExtension, false],
    [remarkLintNoFileNameArticles, false],
    [remarkLintNoFileNameIrregularCharacters, false],
    [remarkLintBlockquoteIndentation, false],
    [remarkLintCodeBlockStyle, false],
    [remarkLintDefinitionCase, false],
    [remarkLintDefinitionSpacing, false],
    [remarkLintEmphasisMarker, false],
    [remarkLintFencedCodeMarker, false],
    [remarkLintFinalNewline, false],
    [remarkLintHardBreakSpaces, false],
    [remarkLintHeadingStyle, false],
    [remarkLintLinkTitleStyle, false],
    [remarkLintListItemBulletIndent, false],
    [remarkLintListItemContentIndent, false],
    [remarkLintListItemIndent, false],
    [remarkLintListItemSpacing, false],
    [remarkLintMaximumLineLength, false],
    [remarkLintNoBlockquoteWithoutMarker, false],
    [remarkLintNoConsecutiveBlankLines, false],
    [remarkLintNoHeadingContentIndent, false],
    [remarkLintNoInlinePadding, false],
    [remarkLintNoTableIndentation, false],
    [remarkLintOrderedListMarkerStyle, false],
    // [remarkLintOrderedListMarkerValue, false],
    [remarkLintRuleStyle, false],
    [remarkLintStrongMarker, false],
    [remarkLintTableCellPadding, false],
    [remarkLintTablePipeAlignment, false],
    [remarkLintTablePipes, false],
    [remarkLintUnorderedListMarkerStyle, false],
  ],
}
