/**
 * Builds the href of a direct contact source from developer.json:
 * "email" becomes a mailto: link and "phone" a tel: link.
 */
export function contactHref(kind: string, value: string): string {
  if (kind === 'email') return `mailto:${value}`
  if (kind === 'phone') return `tel:${value.replace(/[\s().-]/g, '')}`
  return value
}
