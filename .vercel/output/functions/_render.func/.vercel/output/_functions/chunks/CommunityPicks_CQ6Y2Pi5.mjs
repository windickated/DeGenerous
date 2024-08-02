import { l as createComponent, m as renderTemplate, p as renderComponent } from './astro/server_Cc_Sv-nP.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_CsXQ0mjH.mjs';
import { $ as $$StoryCollection } from './storyCollection_BRLmtUQ0.mjs';

const $$CommunityPicks = createComponent(($$result, $$props, $$slots) => {
  const arrow = true;
  const storySection = "CommunityPicks";
  const subheading = `
Community Picks are stories that aren't bound to any project or genre but have been demanded, written, or voted in by the Potentials holders.`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Community Picks | CoNexus", "header": "Community Picks", "subheading": subheading, "arrow": arrow }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StoryCollection", $$StoryCollection, { "storySection": storySection, "storyNames": ["Upcoming"] })} ` })}`;
}, "/Users/dima/Desktop/src/pages/CoNexus/CommunityPicks.astro", void 0);

const $$file = "/Users/dima/Desktop/src/pages/CoNexus/CommunityPicks.astro";
const $$url = "/CoNexus/CommunityPicks";

export { $$CommunityPicks as default, $$file as file, $$url as url };
