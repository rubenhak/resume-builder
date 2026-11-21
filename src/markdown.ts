/**
 * Minimal inline markdown renderer for resume text fields.
 *
 * Supported syntax:
 *   **bold**          -> <strong>bold</strong>
 *   *italic*          -> <em>italic</em>
 *   ***bold italic*** -> <strong><em>bold italic</em></strong>
 *   ~~strike~~        -> <del>strike</del>
 *   `code`            -> <code>code</code>
 *   [text](url)       -> <a href="url">text</a>  (http, https, mailto only)
 *   \*                -> literal asterisk (backslash escapes any markdown char)
 *
 * Input is HTML-escaped first, so raw HTML in the YAML is rendered as text.
 */

const HTML_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

function escapeHtml(text: string): string {
  return text.replace(/[&<>"']/g, ch => HTML_ESCAPES[ch]);
}

const ESCAPABLE = '\\`*_[]()~';

// Private-use code points used as placeholders so escaped chars and code spans
// are not touched by the emphasis rules.
const PH_START = '';
const PH_END = '';

function isSafeUrl(url: string): boolean {
  return /^(https?:\/\/|mailto:)/i.test(url);
}

export function renderMarkdown(value: unknown): string {
  if (value === null || value === undefined) {
    return '';
  }
  const text = String(value);

  const stash: string[] = [];
  const hold = (html: string) => {
    stash.push(html);
    return `${PH_START}${stash.length - 1}${PH_END}`;
  };

  // Backslash escapes: \* -> literal *
  let out = text.replace(/\\(.)/g, (match, ch: string) =>
    ESCAPABLE.includes(ch) ? hold(escapeHtml(ch)) : match
  );

  // Code spans: contents rendered verbatim.
  out = out.replace(/`([^`]+)`/g, (_m, code: string) =>
    hold(`<code>${escapeHtml(code)}</code>`)
  );

  out = escapeHtml(out);

  // Links: [text](url)
  out = out.replace(
    /\[([^\]]+)\]\(([^)\s]+)\)/g,
    (match, label: string, url: string) => {
      const rawUrl = url.replace(/&amp;/g, '&');
      if (!isSafeUrl(rawUrl)) {
        return match;
      }
      return `<a href="${url}" target="_blank" class="visible-link">${label}</a>`;
    }
  );

  out = out
    .replace(/\*\*\*(?=\S)([\s\S]*?\S)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(?=\S)([\s\S]*?\S)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(?=\S)([^*]*?\S)\*/g, '<em>$1</em>')
    .replace(/~~(?=\S)([\s\S]*?\S)~~/g, '<del>$1</del>');

  const restore = new RegExp(`${PH_START}(\\d+)${PH_END}`, 'g');
  return out.replace(restore, (_m, idx: string) => stash[Number(idx)]);
}
