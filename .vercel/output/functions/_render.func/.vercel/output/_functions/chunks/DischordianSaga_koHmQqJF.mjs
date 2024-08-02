import { l as createComponent, m as renderTemplate, p as renderComponent } from './astro/server_DPgwIr4z.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_D-A3faeZ.mjs';
import { $ as $$StoryCollection } from './storyCollection_BdgNN8zu.mjs';

const $$DischordianSaga = createComponent(($$result, $$props, $$slots) => {
  const arrow = true;
  const storySection = "DischordianSaga";
  const subheading = `
The Dischordian Saga led to the creation of CoNexus and tells the epic narrative of wars between Artificial Intelligence and Humanity. Its story nodes, voted on by the Potentials NFT holders, evolve the lore and activate a new story within CoNexus each week.`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dischordian Saga | CoNexus", "header": "Dischordian Saga", "subheading": subheading, "arrow": arrow }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StoryCollection", $$StoryCollection, { "storySection": storySection, "storyNames": ["Escape", "Arena"], "collectionTitle": "General" })} ${renderComponent($$result2, "StoryCollection", $$StoryCollection, { "storySection": storySection, "storyNames": ["Assassin", "Soldier", "Spy", "Engineer", "Oracle", "NeYon"], "collectionTitle": "Class-gated" })} ${renderComponent($$result2, "StoryCollection", $$StoryCollection, { "storySection": storySection, "storyNames": ["Inception Ark"], "collectionTitle": "Trait-gated" })} ` })}`;
}, "/Users/dima/Desktop/DeGenerous/src/pages/CoNexus/DischordianSaga.astro", void 0);

const $$file = "/Users/dima/Desktop/DeGenerous/src/pages/CoNexus/DischordianSaga.astro";
const $$url = "/CoNexus/DischordianSaga";

export { $$DischordianSaga as default, $$file as file, $$url as url };
