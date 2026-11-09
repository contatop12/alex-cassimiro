import { audienceIds, formatIds, limits, talkLanguageIds, topicIds } from '../shared/lead.ts';
import { contact, site } from '../site/config.ts';
import { path } from '../site/routes.ts';
import { btnWhatsapp } from './components.ts';
import { icons } from './icons.ts';
import { type Ctx, e, fill } from './util.ts';

type Attrs = Record<string, string | number | boolean | undefined>;

function attrs(a: Attrs): string {
  return Object.entries(a)
    .filter(([, v]) => v !== undefined && v !== false)
    .map(([k, v]) => (v === true ? ` ${k}` : ` ${k}="${e(String(v))}"`))
    .join('');
}

function field(
  id: string,
  label: string,
  control: string,
  opts: { required?: boolean; hint?: string; wide?: boolean } = {},
): string {
  return `<div class="field${opts.wide ? ' field--wide' : ''}" data-field="${id}"><label for="f-${id}">${e(label)}${opts.required ? ' <span class="req" aria-hidden="true">*</span>' : ''}</label>${opts.hint ? `<p class="hint" id="hint-${id}">${e(opts.hint)}</p>` : ''}${control}<p class="field-err" id="err-${id}" hidden></p></div>`;
}

function input(id: string, a: Attrs, hint = false): string {
  return `<input id="f-${id}" name="${id}"${attrs({ ...a, 'aria-describedby': `${hint ? `hint-${id} ` : ''}err-${id}` })}>`;
}

function select(id: string, options: [string, string][], placeholder: string): string {
  return `<div class="select"><select id="f-${id}" name="${id}" aria-describedby="err-${id}"><option value="">${e(placeholder)}</option>${options.map(([v, l]) => `<option value="${e(v)}">${e(l)}</option>`).join('')}</select></div>`;
}

export function form(ctx: Ctx): string {
  const f = ctx.t.form;
  const L = f.labels;
  const messages = {
    errors: f.errors,
    failure: f.failure,
    sending: f.sending,
    submit: f.submit,
    summary: f.errorSummary,
  };
  const privacyLink = `<a href="${path('privacy', ctx.lang)}">${e(ctx.t.footer.privacy.toLowerCase())}</a>`;
  const privacy = e(f.privacy).replace(e('{link}'), privacyLink);
  const talkLang = `<fieldset class="field field--wide radios" data-field="talkLanguage" aria-describedby="hint-talkLanguage err-talkLanguage"><legend>${e(L.talkLanguage)}</legend><p class="hint" id="hint-talkLanguage">${e(f.hints.talkLanguage)}</p><div class="radio-row">${talkLanguageIds
    .map(
      (v) =>
        `<label class="radio"><input type="radio" name="talkLanguage" value="${v}"><span>${e(f.talkLanguageOptions[v])}</span></label>`,
    )
    .join('')}</div><p class="field-err" id="err-talkLanguage" hidden></p></fieldset>`;

  return `<div class="form-card" data-reveal><form class="lead-form" action="/api/lead" method="post" novalidate data-lead-form data-messages="${e(JSON.stringify(messages))}"><div class="form-head"><h2 class="h3">${e(f.title)}</h2><p class="muted">${e(f.requiredHint)}</p></div><div class="form-summary" role="alert" tabindex="-1" hidden data-summary></div><div class="field-grid">${field('name', L.name, input('name', { type: 'text', autocomplete: 'name', required: true, maxlength: limits.name.max }), { required: true })}${field('company', L.company, input('company', { type: 'text', autocomplete: 'organization', required: true, maxlength: limits.company.max }), { required: true })}${field('email', L.email, input('email', { type: 'email', autocomplete: 'email', inputmode: 'email', required: true, maxlength: limits.email.max, spellcheck: 'false' }), { required: true, wide: true })}${field('objective', L.objective, `<textarea id="f-objective" name="objective" rows="4" required maxlength="${limits.objective.max}" placeholder="${e(f.placeholders.objective)}" aria-describedby="hint-objective err-objective"></textarea>`, { required: true, hint: f.hints.objective, wide: true })}</div><details class="details-opt" open><summary>${e(f.detailsLegend)}${icons.plus(18)}</summary><div class="field-grid">${field('phone', L.phone, input('phone', { type: 'tel', autocomplete: 'tel', inputmode: 'tel', maxlength: limits.phone.max, placeholder: f.placeholders.phone }))}${field(
    'topic',
    L.topic,
    select(
      'topic',
      topicIds.map((id) => [id, f.topicOptions[id]]),
      f.selectPlaceholder,
    ),
  )}${field('date', L.date, input('date', { type: 'text', maxlength: limits.date.max, placeholder: f.placeholders.date }))}${field('location', L.location, input('location', { type: 'text', maxlength: limits.location.max, placeholder: f.placeholders.location, autocomplete: 'off' }))}${field(
    'format',
    L.format,
    select(
      'format',
      formatIds.map((id) => [id, f.formatOptions[id]]),
      f.selectPlaceholder,
    ),
  )}${field(
    'audience',
    L.audience,
    select(
      'audience',
      audienceIds.map((id) => [id, f.audienceOptions[id]]),
      f.selectPlaceholder,
    ),
  )}${talkLang}</div></details><div class="hp" aria-hidden="true"><label for="f-website">Website</label><input id="f-website" name="website" type="text" tabindex="-1" autocomplete="off"></div>${site.turnstileSiteKey ? `<div class="turnstile" data-turnstile data-sitekey="${e(site.turnstileSiteKey)}"></div>` : ''}<p class="form-privacy">${privacy}</p><button type="submit" class="btn btn-primary btn-block" data-submit><span>${e(f.submit)}</span></button><div class="form-failure" role="alert" hidden data-failure></div><noscript><p class="form-failure">${e(f.failure.notConfigured)}</p></noscript><p class="form-alt">${e(f.alternatives)} <a href="mailto:${contact.email}" data-cta="form-alt" data-event="email_click">${e(contact.email)}</a></p></form><div class="form-success" hidden tabindex="-1" data-success><span class="success-mark" aria-hidden="true">${icons.check(28)}</span><h2 class="h3">${e(f.successTitle)}</h2><p>${e(f.successText)}</p><div class="btn-row">${btnWhatsapp(ctx, 'form-success')}<button type="button" class="btn btn-ghost" data-reset>${e(f.sendAnother)}</button></div></div></div>`;
}

export { fill };
