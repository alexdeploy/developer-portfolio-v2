/**
 * Builds the href of a direct contact source from developer.json:
 * "email" becomes a mailto: link and "phone" a tel: link.
 */
export function contactHref(kind: string, value: string): string {
  if (kind === 'email') return `mailto:${value}`
  if (kind === 'phone') return `tel:${value.replace(/[\s().-]/g, '')}`
  return value
}

export interface ContactFields {
  name: string
  email: string
  message: string
}

/**
 * mailto: link with the contact form prefilled, used when developer.json configures
 * no form endpoint. Spaces are %20 (not +): mail apps follow RFC 6068, not form encoding.
 */
export function mailtoHref(to: string, fields: ContactFields): string {
  const params = new URLSearchParams({
    subject: `Message from ${fields.name}`,
    body: `${fields.message}\n\n${fields.name} <${fields.email}>`,
  })
  return `mailto:${to}?${params.toString().replace(/\+/g, '%20')}`
}
