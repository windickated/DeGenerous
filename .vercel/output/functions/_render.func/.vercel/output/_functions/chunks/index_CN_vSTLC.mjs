import { l as createComponent, m as renderTemplate, p as renderComponent, n as maybeRenderHead } from './astro/server_Cc_Sv-nP.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_CsXQ0mjH.mjs';
/* empty css                         */

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const profile = false;
  const subheading = null;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "DeGenerous DAO", "header": "DeGenerous DAO", "subheading": subheading, "profile": profile, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div data-astro-cid-j7pv25f6> <a href="./GovernanceHub" data-astro-cid-j7pv25f6>Galactic Governance Hub</a> <a href="./CoNexus" data-astro-cid-j7pv25f6>CoNexus</a> <a href="./Sagaverse" data-astro-cid-j7pv25f6>Sagaverse</a> </div> ` })} `;
}, "/Users/dima/Desktop/src/pages/index.astro", void 0);

const $$file = "/Users/dima/Desktop/src/pages/index.astro";
const $$url = "/DeGenerous";

export { $$Index as default, $$file as file, $$url as url };
