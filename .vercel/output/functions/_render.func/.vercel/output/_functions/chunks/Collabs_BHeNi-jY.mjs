import { l as createComponent, m as renderTemplate, p as renderComponent } from './astro/server_Cc_Sv-nP.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_CsXQ0mjH.mjs';
import { $ as $$StoryCollection } from './storyCollection_BRLmtUQ0.mjs';

const $$Collabs = createComponent(($$result, $$props, $$slots) => {
  const arrow = true;
  const storySection = "Collabs";
  const subheading = `
Collabs are stories that are custom-written to add depth to the partners of DeGenerous DAO.`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Collabs | CoNexus", "header": "Collabs", "subheading": subheading, "arrow": arrow }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StoryCollection", $$StoryCollection, { "storySection": storySection, "storyNames": ["GLMR Apes"] })} ` })}`;
}, "/Users/dima/Desktop/DeGenerous/src/pages/CoNexus/Collabs.astro", void 0);

const $$file = "/Users/dima/Desktop/DeGenerous/src/pages/CoNexus/Collabs.astro";
const $$url = "/DeGenerous/CoNexus/Collabs";

export { $$Collabs as default, $$file as file, $$url as url };
