import { l as createComponent, m as renderTemplate, p as renderComponent, n as maybeRenderHead } from './astro/server_Cc_Sv-nP.mjs';
import 'kleur/colors';
import 'html-escaper';
import { c as create_ssr_component, a as add_attribute, e as escape, $ as $$Layout } from './Layout_CsXQ0mjH.mjs';
/* empty css                           */

/* src/components/CoNexus/menuTile.svelte generated by Svelte v4.2.18 */

const css = {
	code: ".tile.svelte-1b5gs5o{display:flex;flex-direction:column;align-items:center;justify-content:space-between;width:28vw;height:32vw;margin:1vw;padding-bottom:3%;background-color:rgba(22, 30, 95, 0.75);color:rgba(51, 226, 230, 0.75);border:0.05vw solid rgba(51, 226, 230, 0.75);border-radius:1.5vw;filter:drop-shadow(0 0 0.1vw #010020);cursor:pointer;text-decoration:none}.tile.svelte-1b5gs5o:hover,.tile.svelte-1b5gs5o:active{background-color:rgba(51, 226, 230, 0.3);color:#010020;filter:drop-shadow(0 0 0.5vw #33e2e6)}.tile-picture.svelte-1b5gs5o{object-fit:cover;width:95%;height:80%;margin:2.5%;margin-bottom:0;border:0.05vw solid rgba(51, 226, 230, 0.75);border-radius:1vw}.title.svelte-1b5gs5o{font-size:3vw;line-height:3vw;white-space:nowrap;text-shadow:0 0 1vw #010020}@media only screen and (max-width: 600px){.tile.svelte-1b5gs5o{width:80vw;height:60vw;flex:none;margin-bottom:3vw;padding-bottom:0;border-radius:5vw}.tile-picture.svelte-1b5gs5o{width:90%;border-radius:4vw}.title.svelte-1b5gs5o{font-size:1.5em;line-height:1.5em}}",
	map: "{\"version\":3,\"file\":\"menuTile.svelte\",\"sources\":[\"menuTile.svelte\"],\"sourcesContent\":[\"<script>\\n  export let storyName;\\n  let storyLink = storyName.replace(/\\\\s+/g, '');\\n\\n  const storyImage = `/DeGenerous/conexusAssets/titlePicture/${storyLink}1.avif`;\\n</script>\\n\\n\\n<a class=\\\"tile\\\" id=\\\"{storyName}\\\" href=\\\"CoNexus/{storyLink}\\\">\\n  <img class=\\\"tile-picture\\\" src={storyImage} alt=\\\"{storyName}\\\" />\\n  <p class=\\\"title\\\">{ storyName }</p>\\n</a>\\n\\n\\n<style>\\n  .tile {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: space-between;\\n    width: 28vw;\\n    height: 32vw;\\n    margin: 1vw;\\n    padding-bottom: 3%;\\n    background-color: rgba(22, 30, 95, 0.75);\\n    color: rgba(51, 226, 230, 0.75);\\n    border: 0.05vw solid rgba(51, 226, 230, 0.75);\\n    border-radius: 1.5vw;\\n    filter: drop-shadow(0 0 0.1vw #010020);\\n    cursor: pointer;\\n    text-decoration: none;\\n  }\\n\\n  .tile:hover, .tile:active {\\n    background-color: rgba(51, 226, 230, 0.3);\\n    color: #010020;\\n    filter: drop-shadow(0 0 0.5vw #33e2e6);\\n  }\\n\\n  .tile-picture {\\n    object-fit: cover;\\n    width: 95%;\\n    height: 80%;\\n    margin: 2.5%;\\n    margin-bottom: 0;\\n    border: 0.05vw solid rgba(51, 226, 230, 0.75);\\n    border-radius: 1vw;\\n  }\\n\\n  .title {\\n    font-size: 3vw;\\n    line-height: 3vw;\\n    white-space: nowrap;\\n    text-shadow: 0 0 1vw #010020;\\n  }\\n\\n\\n  @media only screen and (max-width: 600px) {\\n    .tile {\\n      width: 80vw;\\n      height: 60vw;\\n      flex: none;\\n      margin-bottom: 3vw;\\n      padding-bottom: 0;\\n      border-radius: 5vw;\\n    }\\n\\n    .tile-picture {\\n      width: 90%;\\n      border-radius: 4vw;\\n    }\\n\\n    .title {\\n      font-size: 1.5em;\\n      line-height: 1.5em;\\n    }\\n  }\\n</style>\"],\"names\":[],\"mappings\":\"AAeE,oBAAM,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,aAAa,CAC9B,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,GAAG,CACX,cAAc,CAAE,EAAE,CAClB,gBAAgB,CAAE,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC,CACxC,KAAK,CAAE,KAAK,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAC/B,MAAM,CAAE,MAAM,CAAC,KAAK,CAAC,KAAK,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAC7C,aAAa,CAAE,KAAK,CACpB,MAAM,CAAE,YAAY,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,OAAO,CAAC,CACtC,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACnB,CAEA,oBAAK,MAAM,CAAE,oBAAK,OAAQ,CACxB,gBAAgB,CAAE,KAAK,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzC,KAAK,CAAE,OAAO,CACd,MAAM,CAAE,YAAY,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,OAAO,CACvC,CAEA,4BAAc,CACZ,UAAU,CAAE,KAAK,CACjB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,CAAC,CAChB,MAAM,CAAE,MAAM,CAAC,KAAK,CAAC,KAAK,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAC7C,aAAa,CAAE,GACjB,CAEA,qBAAO,CACL,SAAS,CAAE,GAAG,CACd,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,MAAM,CACnB,WAAW,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,OACvB,CAGA,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACxC,oBAAM,CACJ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,IAAI,CAAE,IAAI,CACV,aAAa,CAAE,GAAG,CAClB,cAAc,CAAE,CAAC,CACjB,aAAa,CAAE,GACjB,CAEA,4BAAc,CACZ,KAAK,CAAE,GAAG,CACV,aAAa,CAAE,GACjB,CAEA,qBAAO,CACL,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,KACf,CACF\"}"
};

const MenuTile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { storyName } = $$props;
	let storyLink = storyName.replace(/\s+/g, '');
	const storyImage = `/DeGenerous/conexusAssets/titlePicture/${storyLink}1.avif`;
	if ($$props.storyName === void 0 && $$bindings.storyName && storyName !== void 0) $$bindings.storyName(storyName);
	$$result.css.add(css);
	return `<a class="tile svelte-1b5gs5o"${add_attribute("id", storyName, 0)} href="${"CoNexus/" + escape(storyLink, true)}"><img class="tile-picture svelte-1b5gs5o"${add_attribute("src", storyImage, 0)}${add_attribute("alt", storyName, 0)}> <p class="title svelte-1b5gs5o">${escape(storyName)}</p> </a>`;
});

const $$CoNexus = createComponent(async ($$result, $$props, $$slots) => {
  const subheading = `
CoNexus is the gateway to a boundless multiverse with immersive and dynamic interactive Choose-Your-Adventure stories. Powered by cutting-edge artificial intelligence, CoNexus generates captivating narratives in real time, offering you an unparalleled journey into infinite and one-of-a-kind experiences.`;
  const footerText = ["The AI swiftly adapts to your decision between each step and generates a new story text, set of options, and picture in real-time.", "This live factor ensures that nobody can predict or manipulate the games, and endless unique possibilities exist.", "Your choices and actions will shape the course of your unique narrative."];
  const menuText = ["A new world with no limits awaits you.", "Within CoNexus, you will transcend the boundaries of reality as we know it."];
  const arrow = false;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CoNexus | DeGenerous", "header": "CoNexus", "subheading": subheading, "arrow": arrow, "data-astro-cid-z2hpzwr6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="conexus-menu-tiles" data-astro-cid-z2hpzwr6> <p class="menu-text-0" data-astro-cid-z2hpzwr6>${menuText[0]}</p> ${renderComponent($$result2, "MenuTile", MenuTile, { "storyName": "Collabs", "data-astro-cid-z2hpzwr6": true })} ${renderComponent($$result2, "MenuTile", MenuTile, { "storyName": "Dischordian Saga", "data-astro-cid-z2hpzwr6": true })} ${renderComponent($$result2, "MenuTile", MenuTile, { "storyName": "Community Picks", "data-astro-cid-z2hpzwr6": true })} <p class="menu-text-1" data-astro-cid-z2hpzwr6>${menuText[1]}</p> </section> ${footerText.map((text) => renderTemplate`<p class="footer-text" data-astro-cid-z2hpzwr6>${text}</p>`)}  ` })}`;
}, "/Users/dima/Desktop/DeGenerous/src/pages/CoNexus.astro", void 0);

const $$file = "/Users/dima/Desktop/DeGenerous/src/pages/CoNexus.astro";
const $$url = "/DeGenerous/CoNexus";

export { $$CoNexus as default, $$file as file, $$url as url };
